import React, { useState } from 'react';
import ProfileMenu from '../dropdown/ProfileMenu/ProfileMenu';
// import { useSelector } from 'react-redux';

interface IProps {
    pageTitle?: string;
    children: JSX.Element | JSX.Element[];
    hasNavbar?: boolean;
}
// TODO Rajouter le 'loading...' si chargement
// TODO Voir pour mettre la navbar dans un react fragment dans le router
const PageTemplate = ({ pageTitle, children, hasNavbar }: IProps) => {
    // const isLoading = useSelector((state) => state.loaderReducer);
    // document.title = `Facebook | ${isLoading ? 'Loading . . .' : pageTitle}`;
    document.title = !pageTitle ? 'Facebook' : `Facebook | ${pageTitle}`;

    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

    return (
        <>
            {hasNavbar && (
                <div
                    style={{
                        background: 'grey',
                        height: '150px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '5rem',
                    }}>
                    <h1>NAVBAR</h1>
                    <div style={{ position: 'relative' }}>
                        <button onClick={() => setIsOpenProfileMenu(true)}>
                            OPEN PROFILE MENU
                        </button>
                        <ProfileMenu isOpen={isOpenProfileMenu} setIsOpen={setIsOpenProfileMenu} />
                    </div>
                </div>
            )}

            {children}
        </>
    );
};

export default PageTemplate;
