import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext, type themeType } from "./themeContext";

interface useThemeReturn{
    theme?: themeType;
    toggleTheme: ()=> void;

}

export const useTheme = ():useThemeReturn => {
    const {theme, setTheme} = useContext(themeContext)

    const toggleTheme = ()=>{
        console.log('a')
        const newTheme = theme === Theme.PINK? Theme.BLUE : Theme.PINK;
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}

}