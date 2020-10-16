import Home from './App';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

function index() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default index

// Use something like react-router-dom to manage multiple pages/routes

