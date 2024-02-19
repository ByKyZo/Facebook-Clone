import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const CustomLink = ({ children, style, ...rest }: LinkProps) => {
    return (
        <Link {...rest} style={{ color: 'inherit', textDecoration: 'inherit', ...style }}>
            {children}
        </Link>
    );
};

export default CustomLink;
