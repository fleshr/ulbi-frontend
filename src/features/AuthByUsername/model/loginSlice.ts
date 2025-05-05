import { rootReducer } from "@/shared/model";
import type { PayloadAction, WithSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { loginByUsername } from "./services/loginByUsername";
import type { LoginState } from "./types";

const initialState: LoginState = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  selectors: {
    getLoginState: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.username = "";
        state.password = "";
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const injectedLoginSlice = loginSlice.injectInto(rootReducer);

export const { setUsername, setPassword } = injectedLoginSlice.actions;
export const { getLoginState } = injectedLoginSlice.selectors;
export const loginReducer = injectedLoginSlice.reducer;

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices extends WithSlice<typeof loginSlice> {}
}
