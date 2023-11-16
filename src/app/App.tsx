import { Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProviders';
import { AppRouter } from 'app/providers/router';

import './styles/index.css'


export const App = () => {
    const { theme, toggleTheme } = useTheme()
   
    return (
        <div className={`app ${theme}`}>
            <header>
                <Link to={'/'} >Home</Link>
                <Link to={'/about'} >About</Link>
            </header>
            <button onClick={toggleTheme}>Theme</button>
            <div>
              <AppRouter />
            </div>
        </div>
    )
}