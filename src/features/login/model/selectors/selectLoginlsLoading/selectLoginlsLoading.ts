import type { StateSchema } from "../../../../../app/store/config/StateChema";

export const selectLoginIsLoading = (state: StateSchema) =>
  state.loginForm?.isLoading ?? false;