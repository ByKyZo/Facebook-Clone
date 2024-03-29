import React, { useState, useRef } from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications, IoIosArrowDown } from 'react-icons/io';
import CustomNavLink from '../router/CustomNavLink';
import ProfileMenu from '../dropdown/ProfileMenu/ProfileMenu';
import Notifications from '../dropdown/Notifications/Notifications';
import NavSearch from '../dropdown/NavSearch/NavSearch';
import { useAppSelector } from '../../redux/redux.hook';
import { useMediaQuery } from 'react-responsive';
import LogoFb from '../../assets/logo-fb.svg';
import Button from '../utils/Button';
import { useRefUpdate } from '../../hooks/hooks';

// TODO Trouver le probleme du toggle sur le onClick des dropdown
// TODO Trouver le probleme du toggle sur le onClick des dropdown
// TODO Trouver le probleme du toggle sur le onClick des dropdown

const dropdownTop = '52px';
const dropdownRight = '12px';

const Navbar = () => {
    const userID = useAppSelector((state) => state.user._id);
    const isMobile = useMediaQuery({ query: '(max-width: 660px)' });
    const inputRef = useRef<HTMLInputElement>(null);
    // const [notifBtnRef, setNotifBtnRef] = useState<HTMLElement | null>(null);
    const [notifBtnRef, setNotifBtnRef] = useState<HTMLElement | null>(null);
    const [menuBtnRef, setMenuBtnRef] = useRefUpdate<HTMLElement>();

    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenNotif, setIsOpenNotif] = useState(false);
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const [valueInputSearch, setValueInputSearch] = useState('');

    const isClassNameActive = (className: string, state: any) => {
        return state ? `${className} ${className}--active` : className;
    };

    const handleChangeValueInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                            ref={inputRef}
                            className={isClassNameActive(
                                'navbar__search__content__input',
                                isOpenSearch
                            )}
                            onKeyDown={(e) => {
                                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                    e.preventDefault();
                                }
                            }}
                            type="text"
                            value={valueInputSearch}
                            onChange={handleChangeValueInputSearch}
                            placeholder={isMobile && !isOpenSearch ? '' : 'Search Facebook'}
                            onClick={() => setIsOpenSearch(true)}
                        />
                    </label>
                </div>
                <NavSearch
                    inputRef={inputRef}
                    isOpen={isOpenSearch}
                    setIsOpen={setIsOpenSearch}
                    setValueInputSearch={setValueInputSearch}
                    valueInputSearch={valueInputSearch}
                    top="0"
                    left="0"
                />
            </div>
            <div className="navbar__navigation__content">
                <CustomNavLink
                    tooltip="Home"
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
                        <img src="https://picsum.photos/100/100" alt="profile" />
                        <span>Jeff</span>
                    </CustomNavLink>
                    <Button
                        innerRef={setNotifBtnRef}
                        tooltip="Notifications"
                        className={isClassNameActive(
                            'navbar__settings__content__notif',
                            isOpenNotif
                        )}
                        onMouseDown={(e) => {
                            console.log('toggle mousedown notif', e.target);
                            setIsOpenNotif((oldState) => !oldState);
                        }}
                        // onMouseUp={(e) => {
                        //     console.log('toggle mouseup notif', e.target);
                        //     setIsOpenNotif((oldState) => !oldState);
                        // }}
                        // onClick={(e) => {
                        //     console.log('toggle click notif', e.target);
                        //     setIsOpenNotif((oldState) => !oldState);
                        // }}
                        //
                    >
                        <IoMdNotifications />
                    </Button>

                    <Button
                        innerRef={(ref) => setMenuBtnRef(ref)}
                        tooltip="Account"
                        className={isClassNameActive(
                            'navbar__settings__content__arrow',
                            isOpenProfileMenu
                        )}
                        onMouseDown={() => {
                            console.log('mouse down notif');
                            setIsOpenProfileMenu((oldState) => !oldState);
                        }}
                        // onClick={() => {
                        //     console.log('toggle menu');
                        //     setIsOpenProfileMenu((oldState) => !oldState);
                        // }}
                    >
                        <IoIosArrowDown />
                    </Button>
                </div>
            </div>

            <ProfileMenu
                triggerRefProps={menuBtnRef}
                isOpen={isOpenProfileMenu}
                setIsOpen={setIsOpenProfileMenu}
                top={dropdownTop}
                right={dropdownRight}
                isResponsive
                maxWidthResponsive={640}
            />

            <Notifications
                htmlElementIgnore={[notifBtnRef]}
                isOpen={isOpenNotif}
                setIsOpen={setIsOpenNotif}
                top={dropdownTop}
                right={dropdownRight}
                isResponsive
                maxWidthResponsive={640}
            />
        </div>
    );
};

export default Navbar;
