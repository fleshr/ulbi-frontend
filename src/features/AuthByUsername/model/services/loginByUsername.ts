import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchema } from "../types";
import axios from "axios";
import { setUser, User } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";

export const loginByUsername = createAsyncThunk<
  User,
  LoginSchema,
  { rejectValue: string }
>(
  "login/loginByUsername",
  async (args: LoginSchema, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post<User | null>(
        "http://localhost:8000/login",
        args,
      );

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
