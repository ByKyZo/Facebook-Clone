import React, { createContext, ReactElement, useEffect, useMemo, useRef, useState } from 'react';

// TODO Check pour imbriquer les sous menu pour plus de visiblité (et optimisé)
// TODO Trap le focus ou useless ? au user de le faire ? faire une option ?
// TODO Check pour faire la transition avec React transition group (et demonter les composants non actif)

interface IProps {
    children: (provided: INestedMenuProvided) => ReactElement;
    heightDuration?: number;
    nestedSlideDuration?: number;
}

export type setCurrentNestedMenu = (nestedMenuID: string, nestedIndex: number) => void;

interface INestedMenuProvided {
    setCurrentNestedMenu: setCurrentNestedMenu;
    nestedMenuState: {
        nestedMenuID: string;
        nestedIndex: number;
        lastNestedMenuID: string;
        lastNestedIndex: number;
        heightDuration: number;
        nestedSlideDuration: number;
    };
    homeProps: {
        nestedIndex: number;
        nestedMenuID: string;
    };
}

const defaultDuration = 200;

export const NestedMenuContext = createContext({
    nestedMenuID: 'home',
    nestedIndex: -1,
    lastNestedMenuID: 'home',
    lastNestedIndex: -1,
    heightDuration: defaultDuration,
    nestedSlideDuration: defaultDuration,
});

const NestedMenu = ({ children, heightDuration, nestedSlideDuration }: IProps) => {
    const nestedMenuContainerRef = useRef<HTMLDivElement>(null);
    const [currentNestedMenuHeight, setCurrentNestedStateHeight] = useState<number | null>(null);
    const [nestedMenuState, setCurrentNestedState] = useState({
        nestedMenuID: 'home',
        nestedIndex: -1,
        lastNestedMenuID: 'home',
        lastNestedIndex: -1,
        heightDuration: defaultDuration,
        nestedSlideDuration: defaultDuration,
    });

    /**
     * Set transition duration
     */
    useEffect(() => {
        setCurrentNestedState((oldState) => {
            return {
                ...oldState,
                heightDuration: heightDuration || defaultDuration,
                nestedSlideDuration: nestedSlideDuration || defaultDuration,
            };
        });
    }, [heightDuration, nestedSlideDuration]);

    useEffect(() => {
        if (!nestedMenuContainerRef.current) return;
        // @ts-ignore
        let containerChilds = [...nestedMenuContainerRef.current.children];

        /**
         * Check if nested item is duplicates
         **/
        const checkNestedItemDuplicates = containerChilds.filter(
            (child) =>
                child.dataset.nestedMenuId === nestedMenuState.nestedMenuID &&
                parseInt(child.dataset.nestedMenuIndex) === nestedMenuState.nestedIndex
        );

        if (checkNestedItemDuplicates.length > 1)
            throw new Error(
                `nestedMenuID : ${nestedMenuState.nestedMenuID} and nestedIndex : ${nestedMenuState.nestedIndex} has already been used`
            );

        /**
         * Find index of current nested menu
         **/
        const currentChildIndex = containerChilds.findIndex(
            (child) =>
                child.dataset.nestedMenuId === nestedMenuState.nestedMenuID &&
                parseInt(child.dataset.nestedMenuIndex) === nestedMenuState.nestedIndex
        );

        if (currentChildIndex === -1)
            throw new Error(
                `nestedMenuID : ${nestedMenuState.nestedMenuID} or nestedIndex : ${nestedMenuState.nestedIndex} does not exist`
            );

        const nestedMenuHeight = containerChilds[currentChildIndex].offsetHeight;

        setCurrentNestedStateHeight(nestedMenuHeight);
    }, [nestedMenuState, nestedMenuContainerRef]);

    const provided: INestedMenuProvided = useMemo(
        (): INestedMenuProvided => ({
            nestedMenuState,
            setCurrentNestedMenu: (nestedMenuID: string, nestedIndex: number) =>
                setCurrentNestedState((oldState) => {
                    oldState.lastNestedMenuID = oldState.nestedMenuID;
                    oldState.lastNestedIndex = oldState.nestedIndex;
                    oldState.nestedMenuID = nestedMenuID;
                    oldState.nestedIndex = nestedIndex;
                    return { ...oldState };
                }),
            homeProps: {
                nestedIndex: -1,
                nestedMenuID: 'home',
            },
        }),
        [nestedMenuState, setCurrentNestedState]
    );

    const defaultStyle = {
        position: 'relative',
        boxSizing: 'border-box',
        transition: `${nestedMenuState.heightDuration}ms`,
        overflow: 'hidden',
    };

    return (
        <div
            className="container"
            // @ts-ignore
            style={{ ...defaultStyle, height: `${currentNestedMenuHeight}px` || 'auto' }}
            ref={nestedMenuContainerRef}>
            <NestedMenuContext.Provider value={nestedMenuState}>
                {children(provided)}
            </NestedMenuContext.Provider>
        </div>
    );
};

export default NestedMenu;
