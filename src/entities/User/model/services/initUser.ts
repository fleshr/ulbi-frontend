import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataQuery } from "../../api/userApi";
import { User } from "../types/user";

export const initUser = createAsyncThunk<User, undefined, ThunkOptions>(
  "userSlice/initUser",
  async (_, { rejectWithValue, dispatch }) => {
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue("");
    }

    try {
      const response = await dispatch(getUserDataQuery(userId)).unwrap();

      return response;
    } catch {
      return rejectWithValue("");
    }
  },
);
