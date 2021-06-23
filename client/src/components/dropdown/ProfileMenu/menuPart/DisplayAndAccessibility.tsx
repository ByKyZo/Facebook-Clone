import React, { useContext, useEffect, useRef, useState } from 'react';
import ProfileMenuPart from '../components/ProfileMenuPart';
import ProfileMenuIcon from '../components/ProfileMenuIcon';
import { FaMoon } from 'react-icons/fa';
import { Menu } from '../ProfileMenu';
import { setCurrentNestedMenu } from '../../../utils/NestedMenu/NestedMenu';
import { ThemeContext } from '../../../../context/themeContext';

interface IProps {
    setCurrentNestedMenu: setCurrentNestedMenu;
}

enum DarkModeState {
    OFF = 'off',
    ON = 'on',
}

const DisplayAndAccessibility = ({ setCurrentNestedMenu }: IProps) => {
    const { darkModeState, setDarkModeState } = useContext(ThemeContext);
    const darkModeOffRef = useRef<HTMLInputElement>(null);
    const darkModeOnRef = useRef<HTMLInputElement>(null);

    const handleCheckOnEnter = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (!darkModeOffRef.current || !darkModeOnRef.current) return;
        // @ts-ignore
        if (e.key === 'Enter') {
            if (darkModeState === DarkModeState.OFF) {
                darkModeOffRef.current.checked = true;
                setDarkModeState(DarkModeState.OFF);
            } else if (darkModeState === DarkModeState.ON) {
                darkModeOnRef.current.checked = true;
                setDarkModeState(DarkModeState.ON);
            }
        }
    };

    return (
        <ProfileMenuPart
            className="display-accessibility"
            headLabel="Display & Accessibility"
            onBackMenuFunc={() => setCurrentNestedMenu(Menu.HOME, -1)}>
            <div className="dropdown-profile-menu__display-accessibility__section">
                {/*<button onClick={() => setCurrentNestedMenu('home', -1)}>back</button>*/}
                <div className="dropdown-profile-menu__display-accessibility__section__head">
                    <ProfileMenuIcon icon={<FaMoon />} />
                    <div className="dropdown-profile-menu__display-accessibility__section__head__right">
                        <span>Dark Mode</span>
                        <p>
                            Adjust the appearance of Facebook to reduce glare and give your eyes a
                            break.
                        </p>
                    </div>
                </div>
                <div className="dropdown-profile-menu__display-accessibility__section__content">
                    <label
                        tabIndex={0}
                        data-darkmodestate={DarkModeState.OFF}
                        htmlFor="darkmode-off"
                        onKeyDown={(e) => handleCheckOnEnter(e)}>
                        <span>Off</span>
                        <input
                            checked={darkModeState === DarkModeState.OFF}
                            value={DarkModeState.OFF}
                            onChange={(e) => setDarkModeState(e.target.value as DarkModeState)}
                            tabIndex={-1}
                            ref={darkModeOffRef}
                            type="radio"
                            name="theme-mode"
                            id="darkmode-off"
                        />
                    </label>
                    <label
                        tabIndex={0}
                        data-darkmodestate={DarkModeState.ON}
                        htmlFor="darkmode-on"
                        onKeyDown={(e) => handleCheckOnEnter(e)}>
                        <span>On</span>
                        <input
                            checked={darkModeState === DarkModeState.ON}
                            value={DarkModeState.ON}
                            onChange={(e) => setDarkModeState(e.target.value as DarkModeState)}
                            tabIndex={-1}
                            ref={darkModeOnRef}
                            type="radio"
                            name="theme-mode"
                            id="darkmode-on"
                        />
                    </label>
                </div>
            </div>
        </ProfileMenuPart>
    );
};

export default DisplayAndAccessibility;
