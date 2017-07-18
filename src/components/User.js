import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from "./Profile"
import Navigation from "./Navigation";

class UserPage extends Component {

    render() {
        return (
            <div>
                <div>
                    <h1>
                        This is <span style={{color: 'red'}}>Common User</span> page!
                    </h1>
                </div>
                <Switch>
                    <Route exact path={"/user/:name"} component={Profile}/>
                </Switch>
                <Navigation/>
            </div>
        );
    }
}

export default UserPage