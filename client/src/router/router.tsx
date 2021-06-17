import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/router/PrivateRoute';
import SocketPageTester from '../socket/SocketPageTester';

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/profile/:id" component={Profile} />
                <Route exact path="/login" component={Login} />
                {/* PAGE POUR TESER LES SOCKETS A ENLEVER EN PRODUCTION */}
                <Route exact path="/socket" component={SocketPageTester} />
                <h1>Error 404</h1>
            </Switch>
        </Router>
    );
};

export default MainRouter;
