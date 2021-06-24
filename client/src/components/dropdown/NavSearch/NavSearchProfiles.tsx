import React, { useRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';

interface IProps {
    key: number;
    name: string;
    className: string | null;
}

const NavSearchProfiles = ({ className, name, ...rest }: IProps) => {
    const nameValue = useRef<any>(null);

    return (
        <div
            ref={nameValue}
            role="button"
            className={`dropdown__search__user__content ${className}`}>
            <div className="dropdown__search__user__content__profile">
                <span>
                    <CgProfile />
                </span>
                <div>{name}</div>
            </div>
            <button className="dropdown__search__user__content__delete">
                <VscClose />
            </button>
        </div>
    );
};

export default NavSearchProfiles;
