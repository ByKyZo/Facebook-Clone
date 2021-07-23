import React, { useCallback, useEffect } from 'react';
import { createRef } from 'react';
import { useState } from 'react';
import Tooltip from '../utils/Tooltip';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    tooltip?: string;
    innerRef?: (htmlELement: HTMLElement | null) => void;
    // innerRef?: (htmlELement: any) => void;
}

const Button = ({ children, style, tooltip, innerRef, className, ...rest }: IProps) => {
    const [triggerEl, setTriggerEl] = useState<HTMLButtonElement | null>(null);
    const innnerRefCallback = useCallback(() => {
        if (innerRef) {
            innerRef(triggerEl);
        }
    }, [innerRef, triggerEl]);

    useEffect(() => {
        innnerRefCallback();
    }, [innnerRefCallback]);

    return (
        <>
            <button {...rest} className={className} ref={(node) => setTriggerEl(node)}>
                <div style={{ pointerEvents: 'none' }}>{children}</div>
            </button>
            {tooltip && (
                <Tooltip children={tooltip} reference={triggerEl} placement="bottom" mode="hover" />
            )}
        </>
    );
};

export default Button;
