import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux.hook';

const PrivateRoute = ({ ...rest }: RouteProps) => {
    const user = useAppSelector((state) => state.user);

    return (
        <div>
            {user.isAuth ? (
                <Route {...rest} />
            ) : (
                <Route
                    render={({ location }) => (
                        <Redirect to={{ pathname: '/login', state: { from: location } }} />
                    )}
                />
            )}
        </div>
    );
};

export default PrivateRoute;
