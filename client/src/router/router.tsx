import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

/**
 * TODO Faire des routes personnalisées
 */

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default MainRouter;
