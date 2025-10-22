import { lazy } from "react";

export const HomePageAsync = lazy(
    () => 
        new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        setTimeout((() => resolve(import('./HomePage'))),1500)
    })
)