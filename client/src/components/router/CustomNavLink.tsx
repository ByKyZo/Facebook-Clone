import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const CustomNavLink = ({ children, style, ...rest }: NavLinkProps) => {
    return (
        <NavLink {...rest} style={{ color: 'inherit', textDecoration: 'inherit', ...style }}>
            {children}
        </NavLink>
        //       <ToolTip
        //       children={label}
        //       reference={referenceNotif}
        //       placement="bottom"
        //       mode="hover"
        //   />
        // <Button tooltip='Ouvre les livres'>ICON_LIVRE</Button>
    );
};

export default CustomNavLink;
