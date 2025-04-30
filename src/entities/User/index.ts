export { UserRole } from "./constants/userRole";
export { mockUser } from "./mock/user";
export { getIsUserAdmin, getIsUserManager } from "./model/selectors/getRoles";
export {
  userActions,
  userSelectors,
  userSlice,
} from "./model/slices/userSlice";
export type { User, UserState } from "./model/types/user";
