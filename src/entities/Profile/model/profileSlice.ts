import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "./services/fetchProfileData";
import { ProfileState } from "./types";

const initialState: ProfileState = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  selectors: {
    getProfileData: (state) => state.data,
    getProfileIsLoading: (state) => state.isLoading,
    getProfileError: (state) => state.error,
    getProfileReadonly: (state) => state.readonly,
  },
  extraReducers(builder) {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const injectedProfileSlice = profileSlice.injectInto(rootReducer);
export const profileReducer = injectedProfileSlice.reducer;
export const {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
} = injectedProfileSlice.selectors;
