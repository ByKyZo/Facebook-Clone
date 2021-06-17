import React from 'react';

interface IProps {
    icon: any;
}

const ProfileMenuIcon = ({ icon }: IProps) => {
    return <span className="dropdown-profile-menu__item__icon">{icon}</span>;
};

export default ProfileMenuIcon;
