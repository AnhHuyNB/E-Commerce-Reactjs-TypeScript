import type { StateSchema } from "../../../../../app/store/config/StateChema";

export const selectLoginError = (state: StateSchema) => state.loginForm.error