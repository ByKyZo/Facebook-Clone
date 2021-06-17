import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from '../components/templates/Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile, { ProfileNavRoute } from '../pages/Profile';
import PrivateRoute from '../components/router/PrivateRoute';
import SocketPageTester from '../socket/SocketPageTester';

const MainRouter = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/login' && <Navbar />}
            <Switch>
                {/* PAGE POUR TESER LES SOCKETS A ENLEVER EN PRODUCTION */}
                <Route exact path="/socket" component={SocketPageTester} />
                <Route exact path="/login" component={Login} />

                <PrivateRoute exact path="/" component={Home} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id" render={() => <Profile currentNav={ProfileNavRoute.HOME} />} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id/about" render={() => <Profile currentNav={ProfileNavRoute.ABOUT} />} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id/friends" render={() => <Profile currentNav={ProfileNavRoute.FRIENDS}/>} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id/photos" render={() => <Profile currentNav={ProfileNavRoute.PHOTOS}/>} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id/archive" render={() => <Profile currentNav={ProfileNavRoute.ARCHIVE}/>} />
                {/* prettier-ignore */}
                <PrivateRoute exact path="/profile/:id/videos" render={() => <Profile currentNav={ProfileNavRoute.VIDEOS}/>} />

                <h1>Error 404</h1>
            </Switch>
        </>
    );
};

export default MainRouter;
