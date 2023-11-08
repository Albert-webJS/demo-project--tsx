import { useContext } from "react"
import { Theme, ThemeContenxt, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext"

type useThemeResult = {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContenxt)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}