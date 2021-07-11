import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
interface IToolTip {
    children: string;
    reference: HTMLElement | null;
    placement: VariationPlacement;
    offset?: [number, number];
    isActiveClick?: boolean;
    forceVisible?: boolean;
    mode: TooltipMode;
}

const ToolTip = ({
    reference,
    children,
    placement,
    offset,
    forceVisible,
    isActiveClick = false,
}: IToolTip) => {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { styles, attributes } = usePopper(reference, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: offset || [0, 12],
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
        // console.log(isActiveClick);
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
        reference.addEventListener('mouseenter', () => {
            setIsVisible(true);
        });
        reference.addEventListener('mouseleave', () => {
            setIsVisible(false);
        });
    }, [reference, isActiveClick]);

    const duration = 200;

    return (
        <CSSTransition
            unmountOnExit
            in={forceVisible || isVisible}
            timeout={duration}
            classNames="tooltip">
            <div
                id="tooltip"
                ref={setPopperElement}
                style={{ ...styles.popper }}
                {...attributes.popper}>
                {children}
                {/* {
    
                    } */}
                <div id="arrow" ref={setArrowElement} style={{ ...styles.arrow }} />
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

export default ToolTip;
