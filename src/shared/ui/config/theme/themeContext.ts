import { createContext } from "react";

export const Theme = {
    PINK: "pink-theme",
    BLUE: 'blue-theme'
} as const

export type themeType = (typeof Theme)[keyof typeof Theme];

interface ThemeContextProps{
    theme?: themeType,
    setTheme?: (theme: themeType) => void;
}

export const  LOCAL_STORAGE_THEME_KEY = 'theme';

export const themeContext = createContext<ThemeContextProps>({})