import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

interface IProps {
    content?: string;
}

const ErrorToast = ({ content }: IProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiErrorCircle style={{ fontSize: '2rem', marginRight: '12px' }} />
            <span style={{ fontWeight: 600 }}>{content ? content : 'An error has occurred'}</span>
        </div>
    );
};

export default ErrorToast;
