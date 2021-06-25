import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import DropdownSearch from '../../utils/DropdownSearch';
import { IDropDownSearch } from '../../utils/DropdownSearch';
import NavSearchProfiles from '../NavSearch/NavSearchProfiles';
interface IProps extends IDropDownSearch {
    inputRef: React.RefObject<HTMLInputElement>;
    setValueInputSearch: React.Dispatch<React.SetStateAction<string>>;
    valueInputSearch: string;
}

const NavSearch = ({
    inputRef,
    setIsOpen,
    setValueInputSearch,
    valueInputSearch,
    isOpen,
    ...rest
}: IProps) => {
    const [cursor, setCursor] = useState<number>(-1);
    const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

    const items: any = useMemo(
        () => [
            { id: 1, name: 'Jeff' },
            { id: 2, name: 'Julie' },
            { id: 3, name: 'Ky' },
            { id: 4, name: 'Sophie' },
        ],
        []
    );

    useEffect(() => {
        if (!inputRef.current) return;

        setCursor(-1);
        const handleItemFocusArrow = (e: any) => {
            setIsKeyPressed(true);
            let item: any;
            if (e.code === 'ArrowUp') {
                setCursor((oldState) => {
                    oldState = items.length - 1;
                    item = document.querySelector(`[data-item-index="${oldState}"]`);
                    return oldState;
                });
            } else if (e.code === 'ArrowDown') {
                setCursor((oldState) => {
                    oldState = 0;
                    item = document.querySelector(`[data-item-index="${oldState}"]`);
                    return oldState;
                });
            }
            item && item.focus();

            e.code === 'Escape' && setIsOpen(false);
        };

        inputRef.current.addEventListener('keydown', handleItemFocusArrow);

        if (!isOpen) {
            inputRef.current.removeEventListener('keydown', handleItemFocusArrow);
            setCursor(-1);
        }
    }, [isOpen, inputRef, setIsOpen, items.length]);

    useEffect(() => {
        cursor !== -1 && setValueInputSearch(items[cursor].name);
        if (!isOpen) {
            if (cursor !== -1) setValueInputSearch('');
        }
    }, [cursor, items, isOpen, setValueInputSearch]);

    return (
        <DropdownSearch
            {...rest}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            className="dropdown__search">
            <button className="dropdown__search__close">
                <BiArrowBack />
            </button>
            <h1 className="dropdown__search__title">Recherches récentes</h1>
            {items.map((item: any, index: any) => {
                return (
                    <NavSearchProfiles
                        key={item.id}
                        length={items.length}
                        index={index}
                        cursor={cursor}
                        setCursor={setCursor}
                        name={item.name}
                    />
                );
            })}
        </DropdownSearch>
    );
};

export default NavSearch;
