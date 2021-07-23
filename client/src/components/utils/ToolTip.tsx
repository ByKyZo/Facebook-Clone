import e from 'cors';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { useComponentUnmount } from '../../hooks/hooks';

// TODO Faire passer le setIsOpen
// TODO Faire passer le setIsOpen
// TODO Faire passer le setIsOpen
// TODO Faire passer le setIsOpen

interface ITooltip {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    children: any;
    reference: HTMLElement | null;
    placement: VariationPlacement;
    offset?: [number, number];
    activeArrow?: boolean;
    mode: TooltipMode;
}

const Tooltip = ({
    isOpen,
    setIsOpen,
    reference,
    className,
    children,
    placement,
    offset,
    mode,
    activeArrow = false,
}: ITooltip) => {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const duration = 200;

    const { styles, attributes } = usePopper(reference, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: activeArrow ? offset || [0, 12] : offset || [0, 7],
                },
            },
            {
                name: 'arrow',
                options: { element: arrowElement },
            },
        ],
    });
    const [isInnerOpen, setIsInnerOpen] = useState(false);

    useEffect(() => {
        if (isOpen !== undefined) {
            setIsInnerOpen(isOpen);
        }
    }, [isOpen]);

    useEffect(() => {
        if (setIsOpen !== undefined) {
            setIsOpen(isInnerOpen);
        }
    }, [isInnerOpen, setIsOpen]);

    useComponentUnmount(popperElement, setIsInnerOpen, [reference]);

    useEffect(() => {
        // == ne fait rien
        if (!reference) return;

        const handleVisible = () => {
            setIsVisible(true);
        };
        const handleInvisible = () => {
            setIsVisible(false);
        };

        if (mode === 'hover') {
            reference.addEventListener('mouseenter', handleVisible);
            reference.addEventListener('mouseleave', handleInvisible);
        }
        return () => {
            reference.removeEventListener('mouseenter', handleVisible);
            reference.removeEventListener('mouseleave', handleInvisible);
        };
    }, [reference, mode, isVisible]);

    return (
        <CSSTransition
            unmountOnExit
            in={isOpen ? isInnerOpen : isVisible}
            timeout={duration}
            classNames="tooltip">
            <div
                className={`tooltip ${className ? className : 'tooltip-preset'}`}
                ref={setPopperElement}
                style={{ ...styles.popper }}
                {...attributes.popper}>
                {children}
                {activeArrow && (
                    <div className="arrow" ref={setArrowElement} style={{ ...styles.arrow }}></div>
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
