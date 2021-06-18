import React, { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiArrowBack } from 'react-icons/bi';
import { IoMdNotifications, IoIosArrowDown } from 'react-icons/io';
import CustomLink from '../router/CustomLink';
import ProfileMenu from '../dropdown/ProfileMenu/ProfileMenu';
import Notifications from '../dropdown/Notifications/Notifications';
import NavSearch from '../dropdown/NavSearch/NavSearch';
import { useAppSelector } from '../../redux/redux.hook';

const dropdownTop = '52px';
const dropdownRight = '20px';

const Navbar = () => {
    const userID = useAppSelector((state) => state.user._id);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenNotif, setIsOpenNotif] = useState(false);
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const [valueInputSearch, setValueInputSearch] = useState('');

    return (
        <div className="navbar">
            <div className="navbar__search">
                <div className="navbar__search__content">
                    <button
                        className={`navbar__search__content${
                            isOpenSearch ? '--logoArrow' : '--logoFb'
                        }`}>
                        {isOpenSearch ? <BiArrowBack /> : <FaFacebook />}
                    </button>
                    <label>
                        {!isOpenSearch && <AiOutlineSearch />}
                        <input
                            type="text"
                            value={valueInputSearch}
                            onChange={(e) => setValueInputSearch(e.target.value)}
                            placeholder="Rechercher sur Facebook"
                            onFocus={() => setIsOpenSearch(true)}
                        />
                    </label>
                </div>
                <NavSearch isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} top="0" left="0" />
            </div>
            <div className="navbar__navigation__content">
                <CustomLink to="/" className="navbar__navigation__content__item">
                    <div>
                        <AiFillHome />
                    </div>
                </CustomLink>
            </div>
            <div className="navbar__settings">
                <div className="navbar__settings__content">
                    <CustomLink
                        to={`/profile/${userID}`}
                        tabIndex={0}
                        className="navbar__settings__content__profil">
                        <CgProfile />
                        <span>Jeff</span>
                    </CustomLink>
                    <button
                        className="navbar__settings__content__notif"
                        onClick={() => {
                            // console.log('open notifications');
                            setIsOpenNotif(true);
                        }}>
                        <IoMdNotifications />
                    </button>

                    <button
                        className="navbar__settings__content__arrow"
                        onClick={() => {
                            // console.log('open profile menu');
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
