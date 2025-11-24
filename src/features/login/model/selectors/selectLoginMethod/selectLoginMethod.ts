import type { StateSchema } from "../../../../../app/store/config/StateChema";
import { AuthMethod } from "../../../../../shared/config/auth/auth";

export const selectLoginMethod = (state: StateSchema) =>
  state.loginForm?.method ?? AuthMethod.EMAIL;
