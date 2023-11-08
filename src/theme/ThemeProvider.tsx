import { ReactNode, useMemo, useState } from 'react'
import { ThemeContenxt, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState(defaultTheme)


    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])
    
    return (
        <ThemeContenxt.Provider value={defaultProps}>
            {children}
        </ThemeContenxt.Provider>
    )
}