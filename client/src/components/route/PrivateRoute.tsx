import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux.hook';

interface IProps {
    component: any;
    path: string;
    exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
    const user = useAppSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isAuth ? (
                    <Component />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: location } }} />
                )
            }
        />
    );
};

export default PrivateRoute;
