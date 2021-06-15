import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
// import { useMediaQuery } from 'react-responsive';

interface IProps {
    className: string;
    isOpenSearch: boolean;
    setIsOpenSearch: (arg: boolean) => void;
    top: string;
    left: string;
    right?: string;
    bottom?: string;
    children: JSX.Element | JSX.Element[];
    maxWidthResponsive?: number;
    topResponsive?: string;
    rightResponsive?: string;
    bottomResponsive?: string;
    leftResponsive?: string;
}

const DropdownSearch = ({
    className,
    isOpenSearch,
    top,
    left,
    right,
    bottom,
    setIsOpenSearch,
    children,
    maxWidthResponsive = 600,
    topResponsive,
    rightResponsive,
    bottomResponsive,
    leftResponsive,
}: IProps) => {
    const dropdownContentRef = useRef<HTMLDivElement>(null);
    const duration = 200;
    // const isBreakPoint = useMediaQuery({ query: `(max-width: ${maxWidthResponsive}px)` });
    const defaultStyle = {
        transition: `${duration}ms ease`,
        position: 'absolute',
        transformOrigin: 'top',
        top: `${top}`,
        left: `${left}`,
        // transform: 'scaleY(0)',
        transform: 'scale(0.95)',
    };
    const transitionStyles = {
        entering: {
            // transform: 'scaleY(0)',
            opacity: '0',
            transform: 'scale(0.95)',
        },
        entered: {
            // transform: 'scaleY(1)',
            opacity: '1',
            transform: 'scale(1)',
        },
        exiting: {
            // transform: 'scaleY(0)',
            opacity: '0',
            transform: 'scale(0.95)',
        },
        exited: {
            // transform: 'scaleY(0)',
            opacity: '0',
            transform: 'scale(0.95)',
        },
    };

    // const handleStyleResponsive = () => {
    //     return isBreakPoint
    //         ? {
    //               top: topResponsive,
    //               right: rightResponsive,
    //               bottom: bottomResponsive,
    //               left: leftResponsive,
    //           }
    //         : { top, right, bottom, left };
    // };

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (dropdownContentRef.current && !dropdownContentRef.current.contains(e.target))
                setIsOpenSearch(false);
        };
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
        // eslint-disable-next-line
    }, [dropdownContentRef, isOpenSearch, setIsOpenSearch]);

    // const styleResponsive = handleStyleResponsive();

    return (
        <Transition unmountOnExit in={isOpenSearch} timeout={duration}>
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
