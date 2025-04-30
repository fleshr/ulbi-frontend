import { createSelector } from "@reduxjs/toolkit";

const getProfileForm = (state: RootState) => state.profileForm;

export const profileFormSelectors = {
  getForm: createSelector(getProfileForm, (form) => form?.form),
  getData: createSelector(getProfileForm, (form) => form?.data),
  getIsLoading: createSelector(
    getProfileForm,
    (form) => form?.isLoading ?? false,
  ),
  getError: createSelector(getProfileForm, (form) => form?.error),
  getReadOnly: createSelector(getProfileForm, (form) => form?.readonly ?? true),
  getValidateErrors: createSelector(
    getProfileForm,
    (form) => form?.validateErrors,
  ),
};
