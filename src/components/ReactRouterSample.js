import React from 'react'
import HomePage from './HomePage'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import About from './About'
import User from './User'
import NotFound from "./NotFound";

const ReactRouterSample = (props) => {
    return (
        <Router basename="/publisher">
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route path={"/home"} component={HomePage}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/user"} component={User}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default ReactRouterSample