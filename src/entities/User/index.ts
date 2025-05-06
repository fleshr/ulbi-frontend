export { UserRole } from "./const/userRole";
export { mockUser } from "./mock/user";
export { getIsUserAdmin, getIsUserManager } from "./model/selectors/getRoles";
export { saveJsonSettings } from "./model/services/saveJsonSettings";
export {
  userActions,
  userSelectors,
  userSlice,
} from "./model/slices/userSlice";
export type { User, UserState } from "./model/types/user";
