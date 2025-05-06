import { createSelector } from "@reduxjs/toolkit";
import { UserRole } from "../../const/userRole";
import { userSelectors } from "../slices/userSlice";

export const getIsUserAdmin = createSelector(userSelectors.getRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN)),
);

export const getIsUserManager = createSelector(
  userSelectors.getRoles,
  (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);
