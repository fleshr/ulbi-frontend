import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import type { Profile } from "@/entities/Profile";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData";
import type { ProfileFormState } from "../types/profileForm";

const initialState: ProfileFormState = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validateErrors: undefined,
};

export const profileFormSlice = createSlice({
  name: "profileForm",
  initialState,
  reducers: {
    setReadonly(state, action: PayloadAction<boolean>) {
      state.readonly = action.payload;
    },
    updateProfile(state, action: PayloadAction<Profile>) {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit(state) {
      state.form = state.data;
      state.readonly = true;
      state.validateErrors = undefined;
    },
  },
  selectors: {
    getForm: (state) => state.form,
    getData: (state) => state.data,
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
    getReadOnly: (state) => state.readonly,
    getValidateErrors: (state) => state.validateErrors,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.form = action.payload;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const injectedProfileSlice = profileFormSlice.injectInto(rootReducer);
export const profileFormReducer = injectedProfileSlice.reducer;
export const profileFormSelectors = injectedProfileSlice.selectors;
export const profileFormActions = injectedProfileSlice.actions;
