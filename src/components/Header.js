import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'

class Header extends Component {

    render() {
        let wi = (100 / 3) + '%';
        return (
            <div>
                <div id="header" style={{width: "100%", height: "40px", backgroundColor: 'yellow'}}>
                    <Link to="/home">
                        <button style={{width: wi}}>Home</button>
                    </Link>
                    <Link to="/about">
                        <button style={{width: wi}}>About</button>
                    </Link>
                    <Link to="/people">
                        <button style={{width: wi}}>People</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header