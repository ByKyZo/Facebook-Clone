import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const CustomNavLink = ({ children, style, ...rest }: NavLinkProps) => {
    return (
        <NavLink {...rest} style={{ color: 'inherit', textDecoration: 'inherit', ...style }}>
            {children}
        </NavLink>
    );
};

export default CustomNavLink;
