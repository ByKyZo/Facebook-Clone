import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import Head from '../components/layouts/Profile/global/ProfileHead';
import ProfileNav from '../components/layouts/Profile/global/ProfileNav';
import Home from '../components/layouts/Profile/Home';
import About from '../components/layouts/Profile/About';
import Friends from '../components/layouts/Profile/Friends';
import Photos from '../components/layouts/Profile/Photos';
import Archive from '../components/layouts/Profile/Archive';
import Videos from '../components/layouts/Profile/Videos';
import { useAppSelector } from '../redux/redux.hook';

export enum ProfileNavRoute {
    HOME,
    ABOUT,
    FRIENDS,
    PHOTOS,
    ARCHIVE,
    VIDEOS,
}

interface IProps {
    currentNav: ProfileNavRoute;
}

const Profile = ({ currentNav }: IProps) => {
    const user = useAppSelector((state) => state.user);

    const currentNavRender = () => {
        switch (currentNav) {
            case ProfileNavRoute.HOME:
                return <Home />;
            case ProfileNavRoute.ABOUT:
                return <About />;
            case ProfileNavRoute.FRIENDS:
                return <Friends />;
            case ProfileNavRoute.PHOTOS:
                return <Photos />;
            case ProfileNavRoute.ARCHIVE:
                return <Archive />;
            case ProfileNavRoute.VIDEOS:
                return <Videos />;
            default:
                return <Home />;
        }
    };

    return (
        <PageTemplate pageTitle={`${user.firstName} ${user.lastName}`}>
            <div style={{ backgroundColor: 'grey' }}>
                <Head />
                <ProfileNav />
            </div>

            <div style={{ color: 'red', fontSize: '3rem', textAlign: 'center' }}>
                {currentNavRender()}
            </div>
        </PageTemplate>
    );
};

export default Profile;
