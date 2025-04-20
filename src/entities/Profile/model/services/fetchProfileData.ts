import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "../types";

export const fetchProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkOptions<string>
>(
  "profile/fetchProfileData",
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const { data } = await api.get<Profile>("/profile");
      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
