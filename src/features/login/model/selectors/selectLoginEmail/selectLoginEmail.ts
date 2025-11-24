import type { StateSchema } from "../../../../../app/store/config/StateChema";
import { AuthMethod } from "../../../../../shared/config/auth/auth";

export const selectLoginEmail = (state: StateSchema) => 
    state.loginForm.email ?? AuthMethod.EMAIL;