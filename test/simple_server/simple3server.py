import http.server
import posixpath
import socketserver
import urllib

import os
import re
import sys


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split('?', 1)[0]
        path = path.split('#', 1)[0]
        files = re.compile(r"(\.[\w]+)$")
        is_file = files.search(path)
        alias_path = None
        if is_file:
            for key, url in Handler.url_mapping.items():
                if key in path:
                    path = re.sub(key, '', path)
                    alias_path = url
        # Don't forget explicit trailing slash when normalizing. Issue17324
        trailing_slash = path.rstrip().endswith('/')
        try:
            path = urllib.parse.unquote(path, errors='surrogatepass')
        except UnicodeDecodeError:
            path = urllib.parse.unquote(path)
        path = posixpath.normpath(path)
        words = path.split('/')
        words = filter(None, words)
        path = alias_path or Handler.url_mapping['default']
        if is_file:
            for word in words:
                if os.path.dirname(word) or word in (os.curdir, os.pardir):
                    # Ignore components that are not a simple file/directory name
                    continue
                path = os.path.join(path, word)
        if trailing_slash:
            path += '/'
        return path


def main():
    print('Server listening on port 8000...')
    # base_path = sys.argv[1] if len(sys.argv) > 1 else os.getcwd()
    url_mapping = {
        "default": "../../"
    }
    Handler.url_mapping = url_mapping
    httpd = socketserver.TCPServer(('', 8000), Handler)
    httpd.serve_forever()


if __name__ == '__main__':
    main()
