import React from 'react';
// import { useSelector } from 'react-redux';

interface IProps {
    pageTitle?: string;
    children: JSX.Element | JSX.Element[];
    hasNavbar?: boolean;
}
// TODO Rajouter le 'loading...' si chargement
const PageTemplate = ({ pageTitle, children, hasNavbar }: IProps) => {
    // const isLoading = useSelector((state) => state.loaderReducer);
    // document.title = `Facebook | ${isLoading ? 'Loading . . .' : pageTitle}`;
    document.title = !pageTitle ? 'Facebook' : `Facebook | ${pageTitle}`;

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
                    NAVBAR
                </div>
            )}

            {children}
        </>
    );
};

export default PageTemplate;
