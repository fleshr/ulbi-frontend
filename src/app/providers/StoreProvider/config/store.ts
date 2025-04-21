import { ArticleState } from "@/entities/Article";
import { counterSlice } from "@/entities/Counter";
import { type ProfileState } from "@/entities/Profile";
import { userSlice } from "@/entities/User";
import { type LoginState } from "@/features/AuthByUsername";
import { api } from "@/shared/api";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

export interface LazyLoadedSlices {
  login: LoginState;
  profile: ProfileState;
  articleDetails: ArticleState;
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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api },
        },
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export interface ThunkOptions<T> {
  rejectValue: T;
  state: RootState;
  extra: { api: typeof api };
}
