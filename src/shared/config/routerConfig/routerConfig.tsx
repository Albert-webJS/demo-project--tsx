import { lazy } from 'react'
import { RouteProps } from "react-router-dom"

const HomePageLazy = lazy(() => import('pages/HomePage/HomePage'));
const AboutPageLazy = lazy(() => import('pages/AboutPage/AboutPage'));

export enum AppRouters {
    HOME = 'home',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: "/",
    [AppRouters.ABOUT]: "/about"
}

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePageLazy />
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />
    }
}