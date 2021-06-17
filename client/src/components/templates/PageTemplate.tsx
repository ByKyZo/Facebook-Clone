import React, { useState } from 'react';
import ProfileMenu from '../dropdown/ProfileMenu/ProfileMenu';
// import { useSelector } from 'react-redux';
import heatAnimated from '../../assets/emoji/sad.svg';
import Navbar from './Navbar';

interface IProps {
    pageTitle?: string;
    children: JSX.Element | JSX.Element[];
}
// TODO Rajouter le 'loading...' si chargement
// TODO Voir pour mettre la navbar dans un react fragment dans le router
const PageTemplate = ({ pageTitle, children }: IProps) => {
    // const isLoading = useSelector((state) => state.loaderReducer);
    // document.title = `Facebook | ${isLoading ? 'Loading . . .' : pageTitle}`;
    document.title = !pageTitle ? 'Facebook' : `Facebook | ${pageTitle}`;

    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

    // {/*<img height={100} width={100} src={heatAnimated} alt="" />*/}

    return <>{children}</>;
};

export default PageTemplate;
