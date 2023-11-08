import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import styles from './App.module.css'

const HomePageLazy = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPageLazy = lazy(() => import('./pages/AboutPage/AboutPage'));

export const App = () => {
    return (
        <div>
            <header>
                <Link to={'/'} >Home</Link>
                <Link to={'/about'} >About</Link>
            </header>
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