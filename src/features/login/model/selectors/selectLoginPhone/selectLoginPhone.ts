import type { StateSchema } from "../../../../../app/store/config/StateChema";

export const selectLoginPhone = (state: StateSchema) => 
    state.loginForm.phone ?? "";