import { configureStore, type ThunkDispatch, type UnknownAction } from '@reduxjs/toolkit'
import type { StateChema } from './StateChema'

const createStore = (initialState?: StateChema) => {
    return configureStore<StateChema>({
        preloadedState: initialState,
        reducer: {},
    })
}
export type RootState = ThunkDispatch<StateChema, unknown, UnknownAction>