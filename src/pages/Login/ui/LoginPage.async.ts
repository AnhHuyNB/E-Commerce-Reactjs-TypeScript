import { lazy } from "react";

export const LoginPageAsync = lazy(
    () => 
        new Promise<{ default: React.ComponentType<any>}>((resolve) => {
            setTimeout(() => {
                resolve(import('./LoginPage'))
            }, 1500);
        })
)