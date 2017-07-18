import React from 'react'
import ReactDom from 'react-dom'
import FunctionalComponent from './components/HelloMessage'
import Header from './components/Header'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import About from './components/About'
import People from './components/People'
import Base from "./components/Base";
import {Login, fakeAuth} from "./components/Login";
import NotFound from "./components/NotFound";

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
ReactDom.render(<App sample_prp="Sample property"/>, document.getElementById("root"));