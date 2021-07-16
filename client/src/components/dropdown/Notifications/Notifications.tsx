import React from 'react';
import { useRef } from 'react';
import { useRefUpdate } from '../../../hooks/hooks';
import Dropdown, { IDropdownProps } from '../../utils/Dropdown';

interface IProps extends IDropdownProps {
    triggerRefProps: HTMLElement | null;
}

const Notifications = ({ triggerRefProps, ...rest }: IProps) => {
    // const notifRef = useRef<HTMLDivElement>(null);
    // const [notifRef, setNotifRef] = useRefUpdate<HTMLDivElement>();

    return (
        <Dropdown {...rest} contentRef={triggerRefProps} contentClass="dropdown__notif">
            <div className="dropdown__notif__wrapper">
                <h1 className="dropdown__notif__title" style={{ height: '50px' }}>
                    Notifications
                </h1>
                <div className="dropdown__notif__content">
                    {/* NOUVEAU */}
                    <div className="dropdown__notif__content__item">
                        <h2 className="dropdown__notif__content__type">New</h2>

                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                    </div>
                    {/* PLUS TOT */}
                    <div className="dropdown__notif__content__item">
                        <h2
                            style={{ marginTop: '10px' }}
                            className="dropdown__notif__content__type">
                            Earlier
                        </h2>

                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>

                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>

                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>

                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
                            </div>
                            <div className="dropdown__notif__content__info__desc">
                                <span className="dropdown__notif__content__info__desc__content">
                                    <span>Jeff &nbsp;</span>
                                    <span className="notifRef">
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
                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                        <div role="button" tabIndex={0} className="dropdown__notif__content__info">
                            <div className="dropdown__notif__content__info__profil">
                                <img src="https://picsum.photos/100/100" alt="" />
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
                            <span className="notifRef2"></span>
                        </div>
                    </div>
                </div>
            </div>
        </Dropdown>
    );
};

export default Notifications;
