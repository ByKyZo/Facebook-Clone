import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Transition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import { useComponentUnmount, useRefUpdate } from '../../hooks/hooks';
// @mixin placeholder-responsive{
//     position: fixed !important;
//     left : 50%;
//     transform: translateX(-50%);
//     width: 95%;
// }
export interface IDropdownProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    children?: JSX.Element | JSX.Element[];
    // contentRef?: React.RefObject<HTMLElement>;
    contentRef?: HTMLElement | null;
    contentClass?: string;
    notCloseOnRefs?: React.RefObject<HTMLInputElement>;
    isResponsive?: boolean;
    maxWidthResponsive?: number;
    isVertical?: boolean;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    topResponsive?: string;
    rightResponsive?: string;
    bottomResponsive?: string;
    leftResponsive?: string;
}

const Dropdown = ({
    children,
    contentRef,
    contentClass,
    notCloseOnRefs,
    isOpen,
    setIsOpen,
    isResponsive = false,
    maxWidthResponsive = 600,
    isVertical = true,
    top,
    right,
    bottom,
    left,
    topResponsive,
    rightResponsive,
    bottomResponsive,
    leftResponsive,
}: IDropdownProps) => {
    const [dropdownRef, setDropdownRef] = useRefUpdate<HTMLDivElement>();

    useComponentUnmount(dropdownRef, setIsOpen, [contentRef]);

    const isBreakPoint = useMediaQuery({ query: `(max-width: ${maxWidthResponsive}px)` });
    const duration = 100;
    const defaultStyle = {
        transition: `${duration}ms ease`,
        position: 'absolute',
        transformOrigin: 'top',
        transform: 'scale(0.95)',
        zIndex: '9999',
        opacity: '0',
    };

    const transitionStyles = {
        entering: {
            opacity: '1',
            transform: 'scale(1)',
        },
        entered: {
            opacity: '1',
            transform: 'scale(1)',
        },
        exiting: {
            opacity: '0',
            transform: 'scale(0.95)',
        },
        exited: {
            opacity: '0',
            transform: 'scale(0.95)',
        },
    };

    const handleStyleResponsive = () => {
        return isResponsive && isBreakPoint
            ? {
                  top: top,
                  //   right: rightResponsive,
                  //   bottom: bottomResponsive,
                  //   left: leftResponsive,
                  position: 'fixed',
                  left: '50%',
                  transform: 'scale(1) translateX(-50%)',
                  width: '95%',
              }
            : { top, right, bottom, left };
    };

    const styleResponsive = handleStyleResponsive();

    return (
        <>
            <Transition unmountOnExit in={isOpen} timeout={duration}>
                {(state) => (
                    <FocusTrap active={isOpen}>
                        <div
                            className={contentClass}
                            // @ts-ignore
                            // ref={dropdownContentRef}
                            ref={setDropdownRef}
                            style={{
                                ...defaultStyle,
                                // @ts-ignore
                                ...transitionStyles[state],
                                ...styleResponsive,
                            }}>
                            {children}
                        </div>
                    </FocusTrap>
                )}
            </Transition>
        </>
    );
};

export default Dropdown;
