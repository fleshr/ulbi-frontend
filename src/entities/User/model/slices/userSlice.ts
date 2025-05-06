import { USER_LOCALSTORAGE_KEY } from "@/shared/constants";
import { setFeatureFlags } from "@/shared/lib";
import { rootReducer } from "@/shared/model";
import type { PayloadAction, WithSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initUser } from "../services/initUser";
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
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      setFeatureFlags(payload.featureFlags);
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

    builder
      .addCase(initUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state._initialized = true;
        setFeatureFlags(payload.featureFlags);
      })
      .addCase(initUser.rejected, (state) => {
        state.user = null;
        state._initialized = true;
      });
  },
});

export const { actions: userActions, selectors: userSelectors } =
  userSlice.injectInto(rootReducer);

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices extends WithSlice<typeof userSlice> {}
}
