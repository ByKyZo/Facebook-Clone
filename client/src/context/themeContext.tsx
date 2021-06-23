import React from 'react';

interface IThemeContext {
    darkModeState: string | null;
    setDarkModeState: (arg: string) => void;
}

// @ts-ignore
export const ThemeContext = React.createContext<IThemeContext>();
