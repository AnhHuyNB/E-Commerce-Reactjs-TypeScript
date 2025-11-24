import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'
import type { StateSchema } from './StateChema'
import { userReducer } from '../../../entities/user'
import { loginReducer } from '../../../features/login'

export const createStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        preloadedState: initialState,
        reducer: {
            user: userReducer,
            loginForm: loginReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true
    })
}
export type RootState = ThunkDispatch<StateSchema, unknown, UnknownAction>