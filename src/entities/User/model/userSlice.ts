import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = { user: null, _initialized: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    getRoles: (state) => state.user?.roles,
    getUserData: (state) => state.user,
    getUserInitialized: (state) => state._initialized,
  },
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.user = JSON.parse(user) as User;
      }
      state._initialized = true;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
export const userSelectors = userSlice.selectors;
