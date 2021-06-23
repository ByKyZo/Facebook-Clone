import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Transition } from 'react-transition-group';
import { isEmpty } from '../../utils/utils';
import FocusTrap from 'focus-trap-react';

export interface IDropdownProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    children?: JSX.Element | JSX.Element[];
    contentRef?: React.RefObject<HTMLInputElement>;
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
    const dropdownContentRef = useRef<HTMLDivElement>(null);
    const currentRef = isVertical ? dropdownContentRef : contentRef;
    const isBreakPoint = useMediaQuery({ query: `(max-width: ${maxWidthResponsive}px)` });
    const duration = 100;
    const defaultStyle = {
        transition: `${duration}ms ease`,
        position: 'absolute',
        transformOrigin: 'top',
        transform: 'scale(0.95)',
    };

    const transitionStyles = {
        entering: {
            opacity: '0',
            transform: 'scale(0.98)',
        },
        entered: {
            opacity: '1',
            transform: 'scale(1)',
        },
        exiting: {
            opacity: '0',
            transform: 'scale(0.98)',
        },
        exited: {
            opacity: '0',
            transform: 'scale(0.98)',
        },
    };

    useEffect(() => {
        if (!isOpen || !currentRef?.current) return;
        const handleCloseDropDown = (e: any) => {
            if (isEmpty(notCloseOnRefs) || !notCloseOnRefs?.current) {
                if (!currentRef.current) return setIsOpen(false);
                !currentRef.current.contains(e.target) && setIsOpen(false);
            } else {
                if (!currentRef.current || !notCloseOnRefs.current) return setIsOpen(false);
                if (
                    !currentRef.current.contains(e.target) &&
                    !notCloseOnRefs.current.contains(e.target)
                ) {
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener('mousedown', handleCloseDropDown);
        document.addEventListener('touchstart', handleCloseDropDown);

        if (!isOpen) {
            document.removeEventListener('mousedown', handleCloseDropDown);
            document.addEventListener('touchstart', handleCloseDropDown);
        }
    }, [isOpen, setIsOpen, currentRef, notCloseOnRefs]);

    const closeOneEscape = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const handleStyleResponsive = () => {
        return isResponsive && isBreakPoint
            ? {
                  top: topResponsive,
                  right: rightResponsive,
                  bottom: bottomResponsive,
                  left: leftResponsive,
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
                            onKeyDown={(e) => closeOneEscape(e)}
                            // @ts-ignore
                            ref={isVertical && dropdownContentRef}
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
