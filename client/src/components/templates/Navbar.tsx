import React, { useState, useRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiArrowBack } from 'react-icons/bi';
import DropdownSearch from '../utils/DropdownSearch';

const Navbar = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isOpenNotif, setIsOpenNotif] = useState(false);

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
                    <div>
                        <label>
                            {!isOpenSearch && (
                                <button>
                                    <AiOutlineSearch />
                                </button>
                            )}

                            <input
                                type="text"
                                placeholder="Rechercher sur Facebook"
                                onClick={() => setIsOpenSearch(true)}
                            />
                        </label>
                    </div>
                </div>
                <DropdownSearch
                    className="dropdown__search"
                    isOpenSearch={isOpenSearch}
                    top="0"
                    left="0"
                    setIsOpenSearch={setIsOpenSearch}>
                    <div style={{ height: '56px' }}></div>
                    <div className="dropdown__search__title" style={{ height: '50px' }}>
                        <h1>Recherches récentes</h1>
                    </div>
                    <div className="dropdown__search__user__content">
                        <div className="dropdown__search__user__content__profile">
                            <span>
                                <CgProfile />
                            </span>
                            <div>Jeff</div>
                        </div>
                        <span className="dropdown__search__user__content__delete">
                            <TiDeleteOutline />
                        </span>
                    </div>
                    <div className="dropdown__search__user__content">
                        <div className="dropdown__search__user__content__profile">
                            <span>
                                <CgProfile />
                            </span>
                            <div>Ky</div>
                        </div>
                        <span className="dropdown__search__user__content__delete">
                            <TiDeleteOutline />
                        </span>
                    </div>
                    <div className="dropdown__search__user__content">
                        <div className="dropdown__search__user__content__profile">
                            <span>
                                <CgProfile />
                            </span>
                            <div>Antoine</div>
                        </div>
                        <span className="dropdown__search__user__content__delete">
                            <TiDeleteOutline />
                        </span>
                    </div>
                    <div className="dropdown__search__user__content">
                        <div className="dropdown__search__user__content__profile">
                            <span>
                                <CgProfile />
                            </span>
                            <div>Jeremy</div>
                        </div>
                        <span className="dropdown__search__user__content__delete">
                            <TiDeleteOutline />
                        </span>
                    </div>
                </DropdownSearch>
            </div>

            <div className="navbar__navigation">
                <div className="navbar__navigation__content">
                    <button>
                        <AiFillHome />
                    </button>
                </div>
            </div>
            <div className="navbar__settings">
                <div className="navbar__settings__content">
                    <div className="navbar__settings__content__profil">
                        <button>
                            <CgProfile />
                        </button>
                        <span>Jeff</span>
                    </div>
                    <div className="navbar__settings__content__notif">
                        <button>
                            <IoMdNotifications />
                        </button>
                    </div>
                    <div className="navbar__settings__content__arrow">
                        <button>
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
