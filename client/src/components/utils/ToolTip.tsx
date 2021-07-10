import { relative } from 'path';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { usePopper } from 'react-popper';

interface IToolTip {
    children: string;
    reference: HTMLElement | null;
    placement: any;
    posX?: number;
    posY?: number;
}

const ToolTip = ({ reference, children, placement, posX, posY }: IToolTip) => {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(reference, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [posX, posY],
                },
            },
            {
                name: 'arrow',
                options: { element: arrowElement, padding: 5 },
            },
        ],
    });

    const defaultStyleTooltip = {
        position: 'relative',
        backgroundColor: 'white',
        opacity: '.65',
        color: 'black',
        borderRadius: '9px',
        padding: '10px 14px',
        fontSize: '12px',
        visibility: 'hidden',
    };

    const defaultStyleArrow = {
        // visibility: 'hidden',
        // position: 'absolute',
        // width: '8px',
        // height: '8px',
        // background: 'inherit',
    };

    console.log(styles.arrow);

    useEffect(() => {
        // == ne fait rien
        if (!reference || !popperElement || !arrowElement) return;

        reference.addEventListener('mouseenter', () => {
            popperElement.style.visibility = 'visible';
            arrowElement.style.visibility = 'visible';
        });
        reference.addEventListener('mouseleave', () => {
            popperElement.style.visibility = 'hidden';
            arrowElement.style.visibility = 'hidden';
        });
    }, [reference]);

    return (
        <>
            <div
                ref={setPopperElement}
                style={{ ...defaultStyleTooltip, ...styles.popper }}
                {...attributes.popper}>
                {children}
                <div ref={setArrowElement} style={{ ...defaultStyleArrow, ...styles.arrow }} />
            </div>
        </>
    );
};

export default ToolTip;
