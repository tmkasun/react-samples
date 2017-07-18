import React from 'react'
import ReactDom from 'react-dom'

const NotFound = (props) => {
    return (
        <h2>
            Sorry This <span style={{color: 'red'}}> "{props.location.pathname}" </span>Page is not available
        </h2>
    );
}

export default NotFound