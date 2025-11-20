import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'
import type { StateChema } from './StateChema'
import { userReducer } from '../../../entities/user'

export const createStore = (initialState?: StateChema) => {
    return configureStore<StateChema>({
        preloadedState: initialState,
        reducer: {
            user: userReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: true
    })
}
export type RootState = ThunkDispatch<StateChema, unknown, UnknownAction>