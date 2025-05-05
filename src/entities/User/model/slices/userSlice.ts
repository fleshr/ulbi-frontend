import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { rootReducer } from "@/shared/model";
import type { PayloadAction, WithSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { User, UserState } from "../types/user";

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

export const { actions: userActions, selectors: userSelectors } =
  userSlice.injectInto(rootReducer);

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices extends WithSlice<typeof userSlice> {}
}
