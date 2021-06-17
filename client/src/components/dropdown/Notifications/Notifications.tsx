import React from 'react';
import Dropdown, { IDropdownProps } from '../../utils/Dropdown';
import { CgProfile } from 'react-icons/cg';
// import IDropdownProps

const Notifications = ({ ...rest }: IDropdownProps) => {
    return (
        <Dropdown {...rest} contentClass="dropdown__notif">
            <div className="dropdown__notif__wrapper">
                <h1 className="dropdown__notif__title" style={{ height: '50px' }}>
                    Notifications
                </h1>
                {/* NOUVEAU */}
                <div role="button" tabIndex={0} className="dropdown__notif__content">
                    <h2 className="dropdown__notif__content__type">Nouveau</h2>

                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                </div>
                {/* PLUS TOT */}
                <div role="button" tabIndex={0} className="dropdown__notif__content">
                    <h2 style={{ marginTop: '10px' }} className="dropdown__notif__content__type">
                        Plus tôt
                    </h2>

                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>

                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>

                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>

                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                <span className="test">
                                    vous invite à la fête de la
                                    musiqueggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    de &nbsp;
                                </span>
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="dropdown__notif__content__info__bubble"></span>
                    </div>
                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                    <div className="dropdown__notif__content__info">
                        <div className="dropdown__notif__content__info__profil">
                            <CgProfile />
                        </div>
                        <div className="dropdown__notif__content__info__desc">
                            <span className="dropdown__notif__content__info__desc__content">
                                <span>Jeff &nbsp;</span>
                                vous invite à la fête de la musique de &nbsp;
                                <span>Bohème Bar</span>
                            </span>
                            <span className="dropdown__notif__content__info__desc__time">
                                Il y a 3 minutes
                            </span>
                        </div>
                        <span className="test2"></span>
                    </div>
                </div>
            </div>
        </Dropdown>
    );
};

export default Notifications;
