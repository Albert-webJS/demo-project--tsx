import { Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';

import './styles/index.css'
import { Navbar } from 'widgets/Navbar';


export const App = () => {
    const { theme, toggleTheme } = useTheme()
   
    return (
        <div className={`app ${theme}`}>
            <header>
                <Navbar/>
            </header>
            <button onClick={toggleTheme}>Theme</button>
            <div>
              <AppRouter />
            </div>
        </div>
    )
}