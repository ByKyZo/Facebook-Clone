import React, { useState } from 'react';
import { useEffect } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
interface ITooltip {
    children: string;
    reference: HTMLElement | null;
    placement: VariationPlacement;
    offset?: [number, number];
    activeArrow?: boolean;
    mode: TooltipMode;
}

const Tooltip = ({
    reference,
    children,
    placement,
    offset,
    mode,
    activeArrow = false,
}: ITooltip) => {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { styles, attributes } = usePopper(reference, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: offset || [0, 7],
                },
            },
            {
                name: 'arrow',
                options: { element: arrowElement },
            },
        ],
    });

    useEffect(() => {
        // == ne fait rien
        if (!reference) return;
        // isActiveClick
        //     ? reference.addEventListener('onClick', () => {
        //           popperElement.style.visibility = 'visible';
        //           //   popperElement.setAttribute('data-show', '');
        //       })
        //     : reference.addEventListener('onClick', () => {
        //           popperElement.style.visibility = 'hidden';
        //           popperElement.removeAttribute('data-show');
        //       });
        console.log(reference);
        if (mode === 'hover') {
            reference.addEventListener('mouseenter', () => {
                setIsVisible(true);
            });
            reference.addEventListener('mouseleave', () => {
                setIsVisible(false);
            });
        } else if (mode === 'click') {
            reference.addEventListener('click', () => {
                setIsVisible(!isVisible);
            });
        }
    }, [reference, mode]);

    const duration = 200;

    return (
        <CSSTransition unmountOnExit in={isVisible} timeout={duration} classNames="tooltip">
            <div
                id="tooltip"
                ref={setPopperElement}
                style={{ ...styles.popper }}
                {...attributes.popper}>
                {children}
                {activeArrow && (
                    <div id="arrow" ref={setArrowElement} style={{ ...styles.arrow }} />
                )}
            </div>
        </CSSTransition>
    );
};

type TooltipMode = 'hover' | 'click';
type VariationPlacement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'auto'
    | 'auto-start'
    | 'auto-end';

export default Tooltip;
