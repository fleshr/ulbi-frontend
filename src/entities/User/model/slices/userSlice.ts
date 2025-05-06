import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { setFeatureFlags } from "@/shared/lib";
import { rootReducer } from "@/shared/model";
import type { PayloadAction, WithSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { saveJsonSettings } from "../services/saveJsonSettings";
import type { User, UserState } from "../types/user";

const initialState: UserState = { user: null, _initialized: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    getRoles: (state) => state.user?.roles,
    getUserData: (state) => state.user,
    getUserInitialized: (state) => state._initialized,
    getJsonSettings: (state) => state.user?.jsonSettings ?? {},
  },
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      setFeatureFlags(action.payload?.featureFlags);
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        const parserUser = JSON.parse(user) as User;
        state.user = parserUser;
        setFeatureFlags(parserUser.featureFlags);
      }
      state._initialized = true;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
      if (state.user) {
        state.user.jsonSettings = payload;
      }
    });
  },
});

export const { actions: userActions, selectors: userSelectors } =
  userSlice.injectInto(rootReducer);

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices extends WithSlice<typeof userSlice> {}
}
