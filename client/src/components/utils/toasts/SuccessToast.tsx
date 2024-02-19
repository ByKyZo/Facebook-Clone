import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

interface IProps {
    content: string;
}

const SuccessToast = ({ content }: IProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiCheckCircle style={{ fontSize: '2rem', marginRight: '12px' }} />
            <span style={{ fontWeight: 600 }}>{content}</span>
        </div>
    );
};

export default SuccessToast;
