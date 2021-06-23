import React, { HTMLProps, useContext } from 'react';
// import { Transition } from 'react-transition-group';
import { NestedMenuContext } from './NestedMenu';

export interface INestedMenuItemProps {
    children: JSX.Element | JSX.Element[];
    nestedMenuID: string;
    nestedIndex: number;
}

// TODO Voir pour demonter les nested menu non actif a la fin de la transition

const NestedMenuItem: React.FC<HTMLProps<HTMLDivElement> & INestedMenuItemProps> = ({
    children,
    nestedMenuID,
    nestedIndex,
    style,
    ...rest
}) => {
    const currentMenu = useContext(NestedMenuContext);
    const duration = currentMenu.nestedSlideDuration;

    // const isLastedCurrentNestedMenu = () => {
    //     return (
    //         currentMenu.lastNestedIndex === nestedIndex &&
    //         nestedMenuID === currentMenu.nestedMenuID &&
    //         nestedIndex !== -1
    //     );
    // };

    const isCurrentNestedMenu = () => {
        return currentMenu.nestedIndex === nestedIndex && nestedMenuID === currentMenu.nestedMenuID;
    };

    const isPreviousNestedMenu = () => {
        return currentMenu.nestedIndex > nestedIndex;
    };

    const defaultStyle = {
        position: 'absolute',
        width: '100%',
        height: 'auto',
        /**
         * Only 'left' in transition is important for good focus trap
         */
        transition: `left ${duration}ms ease`,
        left: '0',
    };

    // const transitionStyles = {
    //     entering: {
    //         left: isPreviousNestedMenu() ? '-100%' : '100%',
    //         visibility: 'hidden',
    //     },
    //     entered: {
    //         left: isLastedCurrentNestedMenu() ? (isPreviousNestedMenu() ? '-100%' : '100%') : '0',
    //         visibility: isLastedCurrentNestedMenu() ? 'hidden' : 'visible',
    //     },
    //     exiting: {
    //         left: isPreviousNestedMenu() ? '-100%' : '100%',
    //         visibility: 'hidden',
    //     },
    //     exited: {
    //         left: isPreviousNestedMenu() ? '-100%' : '100%',
    //         visibility: 'hidden',
    //     },
    // };

    const nestedStyle = {
        left: isCurrentNestedMenu() ? '0' : isPreviousNestedMenu() ? '-100%' : '100%',
        visibility: isCurrentNestedMenu() ? 'visible' : 'hidden',
    };

    return (
        <>
            {/*<FocusTrap>*/}
            <div
                // @ts-ignore
                style={{
                    ...defaultStyle,
                    ...style,
                    ...nestedStyle,
                    // @ts-ignore
                    // ...transitionStyles[state],
                }}
                data-nested-menu-id={nestedMenuID}
                data-nested-menu-index={nestedIndex}
                {...rest}>
                {children}
            </div>
            {/*</FocusTrap>*/}
        </>
    );
};

export default NestedMenuItem;
