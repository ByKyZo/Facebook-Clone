import React, { useEffect } from 'react';
import { useState } from 'react';
import Tooltip from '../utils/Tooltip';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    tooltip?: string;
    innerRef?: (htmlELement: HTMLElement | null) => void;
}

const Button = ({ children, style, tooltip, innerRef, onClick, className, ...rest }: IProps) => {
    const [triggerEl, setTriggerEl] = useState<HTMLButtonElement | null>(null);

    const handlePressEnter = (e: any, onClick: any) => {
        if (e.code === 13) {
            onClick();
            console.log(e.code);
        }
    };
    useEffect(() => {
        if (innerRef) {
            innerRef(triggerEl);
        }
    }, [innerRef]);
    // const handle;

    console.log(onClick);
    return (
        <>
            <button
                {...rest}
                className={className}
                ref={(ref) => setTriggerEl}
                onKeyDown={(e) => handlePressEnter(e, onClick)}
                onClick={onClick}>
                {children}
            </button>
            {tooltip && (
                <Tooltip children={tooltip} reference={triggerEl} placement="bottom" mode="hover" />
            )}
        </>
    );
};

export default Button;
