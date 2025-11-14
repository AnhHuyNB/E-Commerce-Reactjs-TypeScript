export const AppRoutes = {
    HOME: 'home',
    LOGIN: 'login',
    NOT_FOUND: 'notFound'
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.LOGIN]: '/login',

    // last
    [AppRoutes.NOT_FOUND]: '*'
}
