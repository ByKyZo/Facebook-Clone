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
import ToolTip from '../utils/ToolTip';

const dropdownTop = '52px';
const dropdownRight = '12px';

const Navbar = () => {
    const userID = useAppSelector((state) => state.user._id);
    const isMobile = useMediaQuery({ query: '(max-width: 660px)' });
    const inputRef = useRef<HTMLInputElement>(null);

    const [referenceHome, setReferenceHome] = useState<HTMLDivElement | null>(null);
    const [referenceNotif, setReferenceNotif] = useState<HTMLButtonElement | null>(null);
    const [referenceAccount, setReferenceAccount] = useState<HTMLButtonElement | null>(null);

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
            <div ref={setReferenceHome} className="navbar__navigation__content">
                <CustomNavLink
                    exact
                    to="/"
                    className="navbar__navigation__content__item"
                    activeClassName="navbar__navigation__content__item--active">
                    <div>
                        <AiFillHome className="navbar__navigation__content__item__home" />
                    </div>
                </CustomNavLink>
                {/* TOOLTIP HOME */}
                <ToolTip children="Home" reference={referenceHome} placement="bottom" posY={7} />
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
                    <button
                        ref={setReferenceNotif}
                        className={isClassNameActive(
                            'navbar__settings__content__notif',
                            isOpenNotif
                        )}
                        onClick={() => {
                            setIsOpenNotif(true);
                        }}>
                        <IoMdNotifications />
                        {/* TOOLTIP NOTIF*/}
                    </button>
                    <ToolTip
                        children="Notifications"
                        reference={referenceNotif}
                        placement="bottom"
                        posY={11}
                    />

                    <button
                        ref={setReferenceAccount}
                        className={isClassNameActive(
                            'navbar__settings__content__arrow',
                            isOpenProfileMenu
                        )}
                        onClick={() => {
                            setIsOpenProfileMenu(true);
                        }}>
                        <IoIosArrowDown />
                    </button>
                    {/* TOOLTIP ACCOUNT */}
                    <ToolTip
                        children="Account"
                        reference={referenceAccount}
                        placement="bottom"
                        posY={11}
                    />
                </div>
            </div>

            <ProfileMenu
                isOpen={isOpenProfileMenu}
                setIsOpen={setIsOpenProfileMenu}
                top={dropdownTop}
                right={dropdownRight}
                isResponsive
                maxWidthResponsive={640}
            />

            <Notifications
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
