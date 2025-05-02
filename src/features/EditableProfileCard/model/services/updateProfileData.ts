import type { Profile } from "@/entities/Profile";
import type { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ValidateError } from "../../constants/validateError";
import { profileFormSelectors } from "../selectors/profileFormSelectors";
import { validateProfileData } from "./validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkOptions<ValidateError[]>
>(
  "profileForm/updateProfileData",
  async (_, { rejectWithValue, getState, extra: { api } }) => {
    try {
      const formData = profileFormSelectors.getForm(getState());
      const errors = validateProfileData(formData);

      if (!formData) {
        return rejectWithValue([ValidateError.NO_DATA]);
      }

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const { data } = await api.put<Profile | undefined>(
        `/profile/${formData.id}`,
        formData,
      );

      if (!data) {
        return rejectWithValue([ValidateError.NO_DATA]);
      }

      return data;
    } catch {
      return rejectWithValue([ValidateError.SERVER_ERROR]);
    }
  },
);
