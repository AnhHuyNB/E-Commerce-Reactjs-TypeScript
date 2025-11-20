import type { User, UserSchema } from './model/types/UserSchema';
import { userActions, userReducer } from "./model/slice/userSlice"

export { userReducer, userActions }
export type { User, UserSchema }