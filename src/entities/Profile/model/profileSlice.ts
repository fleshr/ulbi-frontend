import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "./services/fetchProfileData";
import { updateProfileData } from "./services/updateProfileData";
import { Profile, ProfileState } from "./types";

const initialState: ProfileState = {
  data: undefined,
  form: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validateErrors: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
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
  extraReducers(builder) {
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
      });

    builder
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

export const injectedProfileSlice = profileSlice.injectInto(rootReducer);
export const profileReducer = injectedProfileSlice.reducer;
export const profileSelectors = injectedProfileSlice.selectors;
export const profileActions = injectedProfileSlice.actions;
