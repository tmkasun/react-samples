import React from 'react'
import ReactDom from 'react-dom'
import FunctionalComponent from './HelloMessage'
import Header from './Header'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import About from './About'
import People from './User'
import Base from "./Base";
import {Login, fakeAuth} from "./Login";
import NotFound from "./NotFound";

const Protected = () => {
    if (fakeAuth.isAuth)
        return (
            <div>
                <Switch>
                    <Route path={"/home"} component={FunctionalComponent}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/people"} component={People}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    return (
        <Redirect to={{
            pathname: '/login'
        }}/>
    );
};

const App = (props) => {
    return (
        <Router basename="/publisher">
            <Base>
                <Switch>
                    <Route path={"/login"} component={Login}/>
                </Switch>
                <Protected/>
            </Base>
        </Router>
    );
};
export default App