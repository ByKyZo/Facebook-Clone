import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

export interface IDropDownSearch {
    className?: string;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    top: string;
    left: string;
    right?: string;
    bottom?: string;
    children?: JSX.Element | JSX.Element[];
    maxWidthResponsive?: number;
    topResponsive?: string;
    rightResponsive?: string;
    bottomResponsive?: string;
    leftResponsive?: string;
}

const DropdownSearch = ({
    className,
    isOpen,
    setIsOpen,
    top,
    left,
    right,
    bottom,
    children,
    maxWidthResponsive = 600,
    topResponsive,
    rightResponsive,
    bottomResponsive,
    leftResponsive,
}: IDropDownSearch) => {
    const dropdownContentRef = useRef<HTMLDivElement>(null);
    const duration = 150;

    const defaultStyle = {
        transition: `${duration}ms ease`,
        position: 'absolute',
        transformOrigin: 'top',
        top: `${top}`,
        left: `${left}`,
        boxShadow: '0 0 16px rgb(0 0 0 / 20%)',
        borderRadius: '6px',
        transform: 'scale(0.95)',
    };
    const transitionStyles = {
        entering: {
            opacity: '0',
            transform: 'scale(0.95)',
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

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (dropdownContentRef.current && !dropdownContentRef.current.contains(e.target))
                setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
        // eslint-disable-next-line
    }, [dropdownContentRef, isOpen, setIsOpen]);

    // const styleResponsive = handleStyleResponsive();

    return (
        <Transition unmountOnExit in={isOpen} timeout={duration}>
            {(state) => (
                <div
                    ref={dropdownContentRef}
                    className={className}
                    style={{
                        ...defaultStyle,
                        // ...styleResponsive,
                        // @ts-ignore
                        ...transitionStyles[state],
                    }}>
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default DropdownSearch;
