import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const CustomLink = ({ children, ...rest }: LinkProps) => {
    return (
        <Link {...rest} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            {children}
        </Link>
    );
};

export default CustomLink;
