import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileSelectors } from "../profileSlice";
import { Profile } from "../types";

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkOptions<string>
>(
  "profile/updateProfileData",
  async (_, { rejectWithValue, getState, extra: { api } }) => {
    try {
      const formData = profileSelectors.getForm(getState());
      const { data } = await api.put<Profile>("/profile", formData);
      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
