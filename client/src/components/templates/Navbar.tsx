import React, { useState, useEffect } from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotifications, IoIosArrowDown } from 'react-icons/io';
import CustomNavLink from '../router/CustomNavLink';
import ProfileMenu from '../dropdown/ProfileMenu/ProfileMenu';
import Notifications from '../dropdown/Notifications/Notifications';
import NavSearch from '../dropdown/NavSearch/NavSearch';
import { useAppSelector } from '../../redux/redux.hook';
import { useMediaQuery } from 'react-responsive';
import LogoFb from '../../assets/logo-fb.svg';

const dropdownTop = '52px';
const dropdownRight = '7px';

const Navbar = () => {
    const userID = useAppSelector((state) => state.user._id);
    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
    const [isOpenNotif, setIsOpenNotif] = useState<boolean>(false);
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState<boolean>(false);
    const [valueInputSearch, setValueInputSearch] = useState<any>('');
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

    const [cursor, setCursor] = useState<number>(0);
    const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);
    const items = [
        { id: 1, name: 'Jeff' },
        { id: 2, name: 'Julie' },
        { id: 3, name: 'Ky' },
        { id: 4, name: 'Sophie' },
    ];

    const handleKeyDown = (e: any) => {
        setIsKeyPressed(true);

        // == UP
        e.code === 'ArrowUp' && cursor > 0 && setCursor((prevCursor) => prevCursor - 1);
        e.code === 'ArrowUp' && cursor <= 1 && setCursor(items.length);

        // == DOWN
        e.code === 'ArrowDown' &&
            cursor <= items.length - 1 &&
            setCursor((prevCursor) => prevCursor + 1);
        e.code === 'ArrowDown' && cursor > 3 && setCursor(1);

        // == Escape
        e.code === 'Escape' && setIsOpenSearch(false);
    };

    const isClassNameActive = (className: string, state: any) => {
        return state ? `${className} ${className}--active` : className;
    };

    const handleChangeValueInputSearch = (e: any) => {
        setValueInputSearch(e.target.value);
        setIsOpenSearch(true);
    };

    return (
        <div className="navbar">
            <div className="navbar__search">
                <div className="navbar__search__content">
                    <CustomNavLink exact to="/">
                        <button className="navbar__search__content--logoFb">
                            <img src={LogoFb} alt="Logo facebook" />
                        </button>
                    </CustomNavLink>
                    <label
                        className={isClassNameActive(
                            'navbar__search__content__label',
                            isOpenSearch
                        )}>
                        {!isOpenSearch && <AiOutlineSearch />}
                        <input
                            onKeyDown={handleKeyDown}
                            className={isClassNameActive(
                                'navbar__search__content__input',
                                isOpenSearch
                            )}
                            type="text"
                            value={valueInputSearch}
                            onChange={handleChangeValueInputSearch}
                            placeholder={isMobile && !isOpenSearch ? '' : 'Rechercher sur Facebook'}
                            onClick={() => setIsOpenSearch(true)}
                        />
                    </label>
                </div>
                <NavSearch
                    isKeyPressed={isKeyPressed}
                    setIsKeyPressed={setIsKeyPressed}
                    items={items}
                    cursor={cursor}
                    setCursor={setCursor}
                    isOpen={isOpenSearch}
                    setIsOpen={setIsOpenSearch}
                    top="0"
                    left="0"
                />
            </div>
            <div className="navbar__navigation__content">
                <CustomNavLink
                    exact
                    to="/"
                    className="navbar__navigation__content__item"
                    activeClassName="navbar__navigation__content__item--active">
                    <div>
                        <AiFillHome className="navbar__navigation__content__item__home" />
                    </div>
                </CustomNavLink>
            </div>
            <div className="navbar__settings">
                <div className="navbar__settings__content">
                    <CustomNavLink
                        activeClassName=" navbar__settings__content__profile--active"
                        tabIndex={0}
                        to={`/profile/${userID}`}
                        className="navbar__settings__content__profile">
                        <CgProfile />
                        {!isMobile && <span>Jeff</span>}
                    </CustomNavLink>
                    <button
                        className={isClassNameActive(
                            'navbar__settings__content__notif',
                            isOpenNotif
                        )}
                        onClick={() => {
                            setIsOpenNotif(true);
                        }}>
                        <IoMdNotifications />
                    </button>

                    <button
                        className={isClassNameActive(
                            'navbar__settings__content__arrow',
                            isOpenProfileMenu
                        )}
                        onClick={() => {
                            setIsOpenProfileMenu(true);
                        }}>
                        <IoIosArrowDown />
                    </button>
                </div>
            </div>

            <ProfileMenu
                isOpen={isOpenProfileMenu}
                setIsOpen={setIsOpenProfileMenu}
                top={dropdownTop}
                right={dropdownRight}
            />

            <Notifications
                isOpen={isOpenNotif}
                setIsOpen={setIsOpenNotif}
                top={dropdownTop}
                right={dropdownRight}
            />
        </div>
    );
};

export default Navbar;
