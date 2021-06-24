import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';

interface IProps {
    key: number;
    name: string;
    index: number;
    length: number;
    cursor: number;
    setCursor: React.Dispatch<React.SetStateAction<number>>;
}

const NavSearchProfiles = ({ name, index, length, cursor, setCursor, ...rest }: IProps) => {
    const handleChangeByArrow = (e: any) => {
        let test: any;
        if (e.key === 'Enter') console.log('Keydown', name);
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            if (e.key === 'ArrowUp') {
                if (cursor - 1 < 0) {
                    setCursor(length - 1);
                    test = document.querySelector(`[data-item-index="${length - 1}"]`);
                } else {
                    setCursor(cursor - 1);
                    test = document.querySelector(`[data-item-index="${cursor - 1}"]`);
                }
            }
            if (e.key === 'ArrowDown') {
                if (cursor + 1 > length - 1) {
                    setCursor(0);
                    test = document.querySelector(`[data-item-index="${0}"]`);
                } else {
                    setCursor(cursor + 1);
                    test = document.querySelector(`[data-item-index="${cursor + 1}"]`);
                }
            }
            test.focus();
        }
    };

    return (
        <div
            onKeyDown={handleChangeByArrow}
            role="button"
            data-item-index={index}
            tabIndex={0}
            className={`dropdown__search__user__content`}>
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
