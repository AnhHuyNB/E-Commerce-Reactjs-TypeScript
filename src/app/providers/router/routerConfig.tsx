import type { RouteProps } from 'react-router'
import { HomePageAsync as HomePage } from '../../../pages/Home/ui/HomePage.async';
import { LoginPageAsync as LoginPage } from '../../../pages/Login/ui/LoginPage.async';
import { AppRoutes, RoutePaths } from '../../../shared/ui/config/route/routePaths';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.HOME],
        element: <HomePage />
    },
    {
        path: RoutePaths[AppRoutes.LOGIN],
        element: <LoginPage />
    }
]