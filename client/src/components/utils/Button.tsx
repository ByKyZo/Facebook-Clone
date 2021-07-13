import React from 'react';
import { useState } from 'react';
import Tooltip from '../utils/Tooltip';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    tooltip?: string;
}

const Button = ({ children, style, tooltip, ...rest }: IProps) => {
    const [triggerEl, setTriggerEl] = useState<HTMLButtonElement | null>(null);

    return (
        <>
            <button {...rest} ref={setTriggerEl}>
                {children}
            </button>
            {tooltip && (
                <Tooltip children={tooltip} reference={triggerEl} placement="bottom" mode="hover" />
            )}
        </>
    );
};

export default Button;
