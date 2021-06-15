import React, { useEffect, useRef, useState } from 'react';
import ProfileMenuPart from '../components/ProfileMenuPart';
import ProfileMenuIcon from '../components/ProfileMenuIcon';
import { FaMoon } from 'react-icons/fa';
import { Menu } from '../ProfileMenu';

interface IProps {
    partRef: React.Ref<any>;
    partValue: Menu;
    currentMenuPart: Menu;
    setCurrentMenuPart: (arg: Menu) => void;
}

enum DarkModeState {
    OFF = 'off',
    ON = 'on',
}

const ThemeAndAccessibility = ({
    partRef,
    partValue,
    currentMenuPart,
    setCurrentMenuPart,
}: IProps) => {
    const darkModeOffRef = useRef<HTMLInputElement>(null);
    const darkModeOnRef = useRef<HTMLInputElement>(null);

    const [darkModeStateValue, setDarkModeStateValue] = useState<DarkModeState>(DarkModeState.OFF);

    const handleCheckOnEnter = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (!darkModeOffRef.current || !darkModeOnRef.current) return;
        // @ts-ignore
        const currentDarkModeValue = e.target.dataset.darkmodestate as DarkModeState;
        if (e.key === 'Enter') {
            if (currentDarkModeValue === DarkModeState.OFF) {
                darkModeOffRef.current.checked = true;
                setDarkModeStateValue(DarkModeState.OFF);
            } else if (currentDarkModeValue === DarkModeState.ON) {
                darkModeOnRef.current.checked = true;
                setDarkModeStateValue(DarkModeState.ON);
            }
        }
    };

    useEffect(() => {
        const htmlEl = document.querySelector('html')!;
        const currentDarkModeValue = htmlEl.dataset.darkmode as DarkModeState;
        setDarkModeStateValue(currentDarkModeValue);
    }, []);

    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-darkmode', darkModeStateValue);
        localStorage.setItem('DARK-MODE', darkModeStateValue);
    }, [darkModeStateValue]);

    return (
        <ProfileMenuPart
            className="display-accessibility"
            headLabel="Display & Accessibility"
            partRef={partRef}
            partValue={partValue}
            currentMenuPart={currentMenuPart}
            setCurrentMenuPart={setCurrentMenuPart}>
            <div className="dropdown-profile-menu__display-accessibility__section">
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
                            checked={darkModeStateValue === DarkModeState.OFF}
                            value={DarkModeState.OFF}
                            onChange={(e) => setDarkModeStateValue(e.target.value as DarkModeState)}
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
                            checked={darkModeStateValue === DarkModeState.ON}
                            value={DarkModeState.ON}
                            onChange={(e) => setDarkModeStateValue(e.target.value as DarkModeState)}
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

export default ThemeAndAccessibility;
