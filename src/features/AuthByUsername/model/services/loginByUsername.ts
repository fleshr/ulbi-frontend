import type { User } from "@/entities/User";
import { userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import type { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginSchema } from "../types";

export const loginByUsername = createAsyncThunk<
  User,
  LoginSchema,
  ThunkOptions<string>
>(
  "login/loginByUsername",
  async (args, { rejectWithValue, dispatch, extra: { api } }) => {
    try {
      const { data } = await api.post<User | null>("/login", args);

      if (!data) {
        return rejectWithValue("error");
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setUser(data));

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
