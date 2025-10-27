import  { useEffect, useState, type ReactNode } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, type themeType } from '../../../shared/ui/config/theme/themeContext'
import { themeContext } from '../../../shared/ui/config/theme/themeContext'

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as themeType) || Theme.PINK

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<themeType>(defaultTheme)

  useEffect(()=> {
    document.body.className = `${theme}`
  })
  return (
    <themeContext.Provider value={{theme, setTheme}}>{children}</themeContext.Provider>
  )
}
