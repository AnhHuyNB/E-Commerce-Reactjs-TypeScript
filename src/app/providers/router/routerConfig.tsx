import type { RouteProps } from 'react-router'
import { HomePageAsync as HomePage } from '../../../pages/Home/ui/HomePage.async';
import { LoginPageAsync as LoginPage } from '../../../pages/Login/ui/LoginPage.async';
import { AppRoutes, RoutePaths } from '../../../shared/config/route/routePaths';
import { NotFoundPage } from '../../../pages/NotFound/ui/NotFoundPage';

export const routeConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.HOME],
        element: <HomePage />
    },
    {
        path: RoutePaths[AppRoutes.LOGIN],
        element: <LoginPage />
    },
    {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    }
]