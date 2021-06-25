import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

interface IProps {
    children: JSX.Element | JSX.Element[];
    className: string;
    headLabel: string;
    onBackMenuFunc: any;
}

const ProfileMenuPart: React.FC<IProps & React.HTMLProps<HTMLDivElement>> = ({
    children,
    className,
    headLabel,
    onBackMenuFunc,
    ...rest
}) => {
    return (
        <div {...rest} className="dropdown-profile-menu__part">
            <div className="dropdown-profile-menu__part__head">
                <button onClick={onBackMenuFunc}>
                    <BsArrowLeftShort />
                </button>
                <span>{headLabel}</span>
            </div>

            {children}
        </div>
    );
};

export default ProfileMenuPart;
