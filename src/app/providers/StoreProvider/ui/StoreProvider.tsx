import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../../../store/config/store'
import type { StateChema } from '../../../store/config/StateChema'

type StoreProviderProps = {
    children: React.ReactNode,
    initialState?: StateChema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {children, initialState} = props
    const store = createStore(initialState)
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
