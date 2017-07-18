/*
 * Even though we don't use React directly we have to import it
 * */
import React from 'react'
import Navigation from './Navigation'
const HomePage = () => {
    return (
        <div>
            <h2>Hello this is HomePage!</h2>
            <Navigation/>
        </div>
    )
};

export default HomePage