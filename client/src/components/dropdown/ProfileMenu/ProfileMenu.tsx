import React from 'react';
import Dropdown, { IDropdownProps } from '../../utils/Dropdown';
import ProfileMenuPart from './components/ProfileMenuPart';
import DisplayAndAccessibility from './menuPart/DisplayAndAccessibility';
import NestedMenu from '../../utils/NestedMenu/NestedMenu';
import NestedMenuItem from '../../utils/NestedMenu/NestedMenuItem';
import ProfileMenuHome from './menuPart/ProfileMenuHome';

export enum Menu {
    HOME = 'home',
    SETTING_AND_PRIVACY = 'SETTING_AND_PRIVACY',
    DISPLAY_AND_ACCESSIBILITY = 'DISPLAY_AND_ACCESSIBILITY',
}

// TODO Créer composant template qui gere automatiquement (avec des data attribute , object , enum etc...)

const ProfileMenu = ({ isOpen, setIsOpen, ...rest }: IDropdownProps) => {
    return (
        <Dropdown
            {...rest}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            contentClass="dropdown-profile-menu">
            <NestedMenu>
                {(provided) => {
                    return (
                        <>
                            {/*
                             *  - Home
                             */}
                            <NestedMenuItem {...provided.homeProps}>
                                <ProfileMenuHome
                                    setCurrentNestedMenu={provided.setCurrentNestedMenu}
                                />
                            </NestedMenuItem>

                            {/*
                             *  - Settings & Privacy
                             */}
                            <NestedMenuItem nestedMenuID={Menu.SETTING_AND_PRIVACY} nestedIndex={0}>
                                <ProfileMenuPart
                                    style={{ height: '600px' }}
                                    className="setting-privacy"
                                    headLabel="Settings & Privacy"
                                    onBackMenuFunc={() =>
                                        provided.setCurrentNestedMenu('home', -1)
                                    }>
                                    <h1>SETTINGS</h1>
                                </ProfileMenuPart>
                            </NestedMenuItem>

                            {/*
                             *  - Display & Accessibility
                             */}
                            <NestedMenuItem
                                nestedMenuID={Menu.DISPLAY_AND_ACCESSIBILITY}
                                nestedIndex={0}>
                                <DisplayAndAccessibility
                                    setCurrentNestedMenu={provided.setCurrentNestedMenu}
                                />
                            </NestedMenuItem>
                        </>
                    );
                }}
            </NestedMenu>
        </Dropdown>
    );
};

export default ProfileMenu;
