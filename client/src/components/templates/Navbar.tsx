import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__search">
                <div className="navbar__search__content">
                    <button>
                        <FaFacebook />
                    </button>

                    <div>
                        <label>
                            <button>
                                <AiOutlineSearch />
                            </button>
                            <input type="text" placeholder="Rechercher sur Facebook" />
                        </label>
                    </div>
                </div>
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
                            {' '}
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
