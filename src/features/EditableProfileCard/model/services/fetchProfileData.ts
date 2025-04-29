import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { Profile } from "@/entities/Profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkOptions<string>
>(
  "profile/fetchProfileData",
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
