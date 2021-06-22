import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import DropdownSearch from '../../utils/DropdownSearch';
import { IDropDownSearch } from '../../utils/DropdownSearch';
import NavSearchProfiles from '../NavSearch/NavSearchProfiles';

const NavSearch = ({ setCursor, cursor, setIsOpen, items, ...rest }: IDropDownSearch | any) => {
    return (
        <DropdownSearch
            {...rest}
            cursor={cursor}
            setCursor={setCursor}
            className="dropdown__search">
            <button className="dropdown__search__close">
                <BiArrowBack />
            </button>
            <h1 className="dropdown__search__title">Recherches récentes</h1>
            {items.map((item: any, i: any) => {
                return (
                    <NavSearchProfiles
                        key={item.id}
                        className={cursor === i ? 'test' : null}
                        name={item.name}
                    />
                );
            })}
        </DropdownSearch>
    );
};

export default NavSearch;
