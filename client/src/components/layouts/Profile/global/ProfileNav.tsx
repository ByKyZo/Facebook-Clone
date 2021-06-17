import React from 'react';
import CustomLink from '../../../router/CustomLink';
import { useAppSelector } from '../../../../redux/redux.hook';

const ProfileNav = () => {
    const userID = useAppSelector((state) => state.user._id);

    return (
        <div>
            <CustomLink style={{ margin: '10px', color: 'darkviolet' }} to={`/profile/${userID}`}>
                Posts
            </CustomLink>
            <CustomLink
                style={{ margin: '10px', color: 'darkviolet' }}
                to={`/profile/${userID}/about`}>
                About
            </CustomLink>
            <CustomLink
                style={{ margin: '10px', color: 'darkviolet' }}
                to={`/profile/${userID}/friends`}>
                Friends
            </CustomLink>
            <CustomLink
                style={{ margin: '10px', color: 'darkviolet' }}
                to={`/profile/${userID}/photos`}>
                Photos
            </CustomLink>
            <CustomLink
                style={{ margin: '10px', color: 'darkviolet' }}
                to={`/profile/${userID}/archive`}>
                Archive
            </CustomLink>
            <CustomLink
                style={{ margin: '10px', color: 'darkviolet' }}
                to={`/profile/${userID}/videos`}>
                Videos
            </CustomLink>
        </div>
    );
};

export default ProfileNav;
