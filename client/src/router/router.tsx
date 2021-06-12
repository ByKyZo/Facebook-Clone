import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/templates/Navbar';
import Login from '../pages/Login';

/**
 * TODO Faire des routes personnalisées
 */

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/navbar" component={Navbar} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default MainRouter;
