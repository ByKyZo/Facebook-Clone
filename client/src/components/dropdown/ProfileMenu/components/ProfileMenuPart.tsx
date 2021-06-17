import React from 'react';
import { Menu } from '../ProfileMenu';
import { BsArrowLeftShort } from 'react-icons/bs';

interface IProps {
    children: JSX.Element | JSX.Element[];
    className: string;
    headLabel: string;
    partRef: React.Ref<any>;
    partValue: Menu;
    currentMenuPart: Menu;
    setCurrentMenuPart: (arg: Menu) => void;
}

const ProfileMenuPart: React.FC<IProps & React.HTMLProps<HTMLDivElement>> = ({
    children,
    className,
    headLabel,
    partRef,
    partValue,
    currentMenuPart,
    setCurrentMenuPart,
    ...rest
}) => {
    const isCurrentMenuPart = () => {
        return currentMenuPart === partValue;
    };

    return (
        <div
            {...rest}
            ref={partRef}
            className={`dropdown-profile-menu__part ${className} ${
                isCurrentMenuPart() ? '' : 'dropdown-profile-menu__part--not-active'
            }`}>
            <div className="dropdown-profile-menu__part__head">
                <button onClick={() => setCurrentMenuPart(Menu.HOME)}>
                    <BsArrowLeftShort />
                </button>
                <span>{headLabel}</span>
            </div>

            {children}
        </div>
    );
};

export default ProfileMenuPart;
