import React from 'react';
import CustomLink from '../../../router/CustomLink';
import ProfileMenuActionItem from '../components/ProfileMenuActionItem';
import { RiSettings5Fill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { Menu } from '../ProfileMenu';
import { useAppSelector } from '../../../../redux/redux.hook';
import { setCurrentNestedMenu } from '../../../utils/NestedMenu/NestedMenu';

interface IProps {
    setCurrentNestedMenu: setCurrentNestedMenu;
}

const ProfileMenuHome = ({ setCurrentNestedMenu }: IProps) => {
    const userID = useAppSelector((state) => state.user._id);

    return (
        <div className="dropdown-profile-menu__home">
            <CustomLink
                to={`/profile/${userID}`}
                className="dropdown-profile-menu__profile dropdown-profile-menu__item">
                <div className="dropdown-profile-menu__profile__img" />
                {/*<img className="dropdown-profile-menu__profile__img" src="" alt="profile" />*/}
                <div className="dropdown-profile-menu__profile__right">
                    <span className="dropdown-profile-menu__profile__right__name">User Name</span>
                    <span className="dropdown-profile-menu__profile__right__seeprofile">
                        See your profile
                    </span>
                </div>
            </CustomLink>
            <hr className="dropdown-profile-menu__divider" />
            <div className="dropdown-profile-menu__content">
                <ProfileMenuActionItem
                    hasSubMenu
                    onClick={() => setCurrentNestedMenu(Menu.SETTING_AND_PRIVACY, 0)}
                    icon={<RiSettings5Fill />}
                    label="Settings & Privacy"
                />
                <ProfileMenuActionItem
                    hasSubMenu
                    onClick={() => setCurrentNestedMenu(Menu.DISPLAY_AND_ACCESSIBILITY, 0)}
                    icon={<FaMoon />}
                    label="Display & Accessibility"
                />
                <ProfileMenuActionItem
                    onClick={() => console.log('LOGOUT')}
                    icon={<ImExit />}
                    label="Log Out"
                />
            </div>
        </div>
    );
};

export default ProfileMenuHome;
