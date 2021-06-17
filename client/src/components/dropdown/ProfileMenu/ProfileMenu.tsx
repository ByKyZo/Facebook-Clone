import React, { useEffect, useRef, useState } from 'react';
import Dropdown from '../../utils/Dropdown';
import { FaMoon } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { RiSettings5Fill } from 'react-icons/ri';
import ProfileMenuActionItem from './components/ProfileMenuActionItem';
import CustomLink from '../../router/CustomLink';
import ProfileMenuPart from './components/ProfileMenuPart';
import ThemeAndAccessibility from './menuPart/ThemeAndAccessibility';

export enum Menu {
    HOME,
    SETTING_PRIVACY,
    THEME_MODE,
    TEST,
}

interface IProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}

// TODO Factoriser / Simplifier le code ! et gerer les sous menu
// TODO Utiliser la nouvelle mixin display
// TODO Créer composant template qui gere automatiquement (avec des data attribute , object , enum etc...)

const ProfileMenu = ({ isOpen, setIsOpen }: IProps) => {
    const homeRef = useRef<HTMLDivElement>(null);
    const settingPrivacyRef = useRef<HTMLDivElement>(null);
    const themeModeRef = useRef<HTMLDivElement>(null);
    const [currentMenuPart, setCurrentMenuPart] = useState(Menu.HOME);
    const [currentMenuPartHeight, setCurrentMenuPartHeight] = useState<number | null>(null);

    const isHomeCurrentPart = () => {
        return currentMenuPart === Menu.HOME;
    };

    useEffect(() => {
        if (!homeRef.current || !themeModeRef.current || !settingPrivacyRef.current) return;

        switch (currentMenuPart) {
            case Menu.HOME:
                setCurrentMenuPartHeight(homeRef.current.clientHeight);
                break;
            case Menu.SETTING_PRIVACY:
                setCurrentMenuPartHeight(settingPrivacyRef.current.clientHeight);
                break;
            case Menu.THEME_MODE:
                setCurrentMenuPartHeight(themeModeRef.current.clientHeight);
                break;
            default:
                setCurrentMenuPartHeight(homeRef.current.clientHeight);
        }
        if (!isOpen) {
            setCurrentMenuPart(Menu.HOME);
        }
    }, [isOpen, currentMenuPart, homeRef, themeModeRef]);

    return (
        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} contentClass="dropdown-profile-menu">
            <div
                className="dropdown-profile-menu__wrapper"
                style={{ height: currentMenuPartHeight || 'auto' }}>
                <div
                    ref={homeRef}
                    className={`dropdown-profile-menu__home ${
                        isHomeCurrentPart() ? '' : 'dropdown-profile-menu__home--not-active'
                    }`}>
                    <CustomLink
                        to="/profile/alex"
                        className="dropdown-profile-menu__profile dropdown-profile-menu__item">
                        <div className="dropdown-profile-menu__profile__img" />
                        {/*<img className="dropdown-profile-menu__profile__img" src="" alt="profile" />*/}
                        <div className="dropdown-profile-menu__profile__right">
                            <span className="dropdown-profile-menu__profile__right__name">
                                User Name
                            </span>
                            <span className="dropdown-profile-menu__profile__right__seeprofile">
                                See your profile
                            </span>
                        </div>
                    </CustomLink>
                    <hr className="dropdown-profile-menu__divider" />
                    <div className="dropdown-profile-menu__content">
                        <ProfileMenuActionItem
                            hasSubMenu
                            onClick={() => setCurrentMenuPart(Menu.SETTING_PRIVACY)}
                            icon={<RiSettings5Fill />}
                            label="Settings & Privacy"
                        />
                        <ProfileMenuActionItem
                            hasSubMenu
                            onClick={() => setCurrentMenuPart(Menu.THEME_MODE)}
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

                {/* CREER UN FICHIER A PART AVEC CETTE BALISE PARENT*/}
                {/* POUR RAJOUTER UNE PART*/}
                <ProfileMenuPart
                    style={{ height: '600px' }}
                    className="setting-privacy"
                    headLabel="Settings & Privacy"
                    partRef={settingPrivacyRef}
                    partValue={Menu.SETTING_PRIVACY}
                    currentMenuPart={currentMenuPart}
                    setCurrentMenuPart={setCurrentMenuPart}>
                    <h1>SETTINGS</h1>
                </ProfileMenuPart>

                <ThemeAndAccessibility
                    partRef={themeModeRef}
                    partValue={Menu.THEME_MODE}
                    currentMenuPart={currentMenuPart}
                    setCurrentMenuPart={setCurrentMenuPart}
                />
            </div>
        </Dropdown>
    );
};

export default ProfileMenu;
