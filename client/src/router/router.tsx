import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/templates/Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/router/PrivateRoute';

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/navbar" component={Navbar} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/profile/:id" component={Profile} />
                <Route exact path="/login" component={Login} />
                <h1>Error 404</h1>
            </Switch>
        </Router>
    );
};

export default MainRouter;
