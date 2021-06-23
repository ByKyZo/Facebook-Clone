import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import DropdownSearch from '../../utils/DropdownSearch';
import { IDropDownSearch } from '../../utils/DropdownSearch';
import NavSearchProfiles from '../NavSearch/NavSearchProfiles';
// setCursor, cursor, setIsOpen, items,
const NavSearch = ({
    cursor,
    items,
    isKeyPressed,
    setIsKeyPressed,
    setCursor,
    ...rest
}: IDropDownSearch | any) => {
    return (
        <DropdownSearch
            {...rest}
            cursor={cursor}
            setCursor={setCursor}
            isKeyPressed={isKeyPressed}
            setIsKeyPressed={setIsKeyPressed}
            className="dropdown__search">
            <button className="dropdown__search__close">
                <BiArrowBack />
            </button>
            <h1 className="dropdown__search__title">Recherches récentes</h1>
            {items.map((item: any, i: any) => {
                return (
                    <NavSearchProfiles
                        key={item.id}
                        className={isKeyPressed === true && cursor - 1 === i ? 'test' : null}
                        name={item.name}
                    />
                );
            })}
        </DropdownSearch>
    );
};

export default NavSearch;
