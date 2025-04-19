import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";
import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";

const initialState: UserState = { user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.user = JSON.parse(user) as User;
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { setUser, initUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
