import type { Profile } from "@/entities/Profile";
import type { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkOptions<string>
>(
  "profileForm/fetchProfileData",
  async (profileId, { rejectWithValue, extra: { api } }) => {
    try {
      const { data } = await api.get<Profile | undefined>(
        `/profile/${profileId}`,
      );

      if (!data) {
        return rejectWithValue("error");
      }

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
