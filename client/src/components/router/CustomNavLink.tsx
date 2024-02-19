import React from 'react';
import { useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import Tooltip from '../utils/Tooltip';

interface IProps extends NavLinkProps {
    tooltip?: string;
}

const CustomNavLink = ({ children, style, tooltip, ...rest }: IProps) => {
    const [triggerEl, setTriggerEl] = useState<HTMLAnchorElement | null>(null);

    return (
        <>
            <NavLink
                ref={setTriggerEl}
                {...rest}
                style={{ color: 'inherit', textDecoration: 'inherit', ...style }}>
                {children}
            </NavLink>
            {tooltip && (
                <Tooltip children={tooltip} reference={triggerEl} placement="bottom" mode="hover" />
            )}
        </>
    );
};

export default CustomNavLink;
