import { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setJsonSettingsMutation } from "../../api/userApi";
import { userSelectors } from "../slices/userSlice";
import { JsonSettings } from "../types/jsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkOptions
>(
  "userSlice/saveJsonSettings",
  async (newJsonSettings, { rejectWithValue, getState, dispatch }) => {
    const user = userSelectors.getUserData(getState());

    if (!user) {
      return rejectWithValue("");
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: user.id,
          jsonSettings: {
            ...user.jsonSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue("");
      }

      return response.jsonSettings;
    } catch {
      return rejectWithValue("");
    }
  },
);
