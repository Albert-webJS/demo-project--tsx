import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProviders';

import './styles/index.css'

const HomePageLazy = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPageLazy = lazy(() => import('../pages/AboutPage/AboutPage'));

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
                <Suspense fallback="Lading...">
                <Routes>
                    <Route path={'/'} element={<HomePageLazy />}/>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                </Routes>
                </Suspense>
            </div>
        </div>
    )
}