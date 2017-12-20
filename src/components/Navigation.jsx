import React from 'react'

import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to={'/about'}>
                <button>About</button>
            </Link>
            <Link to={'/user'}>
                <button>User</button>
            </Link>
            <Link to={'/home'}>
                <button>Home</button>
            </Link>
        </div>
    );
};
export default Navigation