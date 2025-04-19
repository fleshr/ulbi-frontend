import { counterSlice } from "@/entities/Counter";
import { userSlice } from "@/entities/User";
import { LoginState } from "@/features/AuthByUsername";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

export interface LazyLoadedSlices {
  login: LoginState;
}

export const rootReducer = combineSlices(
  counterSlice,
  userSlice,
).withLazyLoadedSlices<LazyLoadedSlices>();

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
