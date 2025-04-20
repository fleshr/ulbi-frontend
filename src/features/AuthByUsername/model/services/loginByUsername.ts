import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { setUser, User } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchema } from "../types";

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
      dispatch(setUser(data));

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
