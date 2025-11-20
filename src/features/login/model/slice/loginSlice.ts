import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LoginFormSchema } from "../types/loginFormSchema";
import { AuthMethod, type AuthMethodType } from "../../../../shared/config/auth/auth";

const initialState: LoginFormSchema = {
    email: '',
    phone: '',
    password: '',
    isLoading: false,
    error: undefined,
    method: AuthMethod.EMAIL
}

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setMethod: (state, action: PayloadAction<AuthMethodType>) => {
            state.method = action.payload
        },
        resetForm: (state) => {
            state.phone = ''
            state.email = ''
            state.password = ''
        }
    }
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } =  loginSlice;