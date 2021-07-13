import React, { useState, useEffect, useRef } from 'react';

interface IFade {
    visible: boolean;
    children: any;
    duration: number;
}

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3; // Element rentre dans le DOM, et on veut l'animer
const LEAVING = 4; // Element quitte DOM => effet de transition opacity 0

const Fade = ({ visible, children, duration = 500 }: IFade) => {
    const test = useRef<any>(null);
    const [state, setState] = useState(visible ? VISIBLE : HIDDEN);
    const className = state === VISIBLE ? 'fade' : 'fade out';

    useEffect(() => {
        if (!visible) {
            setState(LEAVING);
        } else {
            // setState(VISIBLE);
            // setState((oldState) => (oldState === LEAVING ? ENTERING : VISIBLE));
            // == On passe à l'état ENTERING uniquement si il venait de l'état HIDDEN
            setState((oldState) => (oldState === HIDDEN ? ENTERING : VISIBLE));
        }
    }, [visible]);

    // == On masque l'élément après l'animation
    useEffect(() => {
        if (state === ENTERING) {
            setState(VISIBLE);
            // document.body.offsetHeight;
        }
    }, [visible]);

    useEffect(() => {
        if (state === LEAVING) {
            test.current.remove();
        }
    }, [state]);
    // if (state === HIDDEN) return null;

    return (
        <div ref={test} className={className}>
            {children}
        </div>
    );
};

export default Fade;
