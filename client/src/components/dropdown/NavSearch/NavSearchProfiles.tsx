import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';

interface IProps {
    key: number;
    name: string;
    className: string | null;
}

const NavSearchProfiles = ({ className, name, ...rest }: IProps) => {
    return (
        <div role="button" className={`dropdown__search__user__content ${className}`}>
            <div className="dropdown__search__user__content__profile">
                <span>
                    <CgProfile />
                </span>
                <div>{name}</div>
            </div>
            <span className="dropdown__search__user__content__delete">
                <VscClose />
            </span>
        </div>
    );
};

export default NavSearchProfiles;
