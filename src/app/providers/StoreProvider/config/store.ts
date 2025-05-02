import type { ArticleState } from "@/entities/Article";
import { counterSlice } from "@/entities/Counter";
import { userSlice } from "@/entities/User";
import type { AddCommentFormState } from "@/features/AddCommentForm";
import { type LoginState } from "@/features/AuthByUsername";
import type { ProfileFormState } from "@/features/EditableProfileCard";
import { scrollRestorationSlice } from "@/features/ScrollRestoration";
import type { ArticleDetailsPageState } from "@/pages/ArticleDetailsPage";
import type { ArticlesPageState } from "@/pages/ArticlesPage";
import { api, rtkApi } from "@/shared/api";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

export interface LazyLoadedSlices {
  login: LoginState;
  profileForm: ProfileFormState;
  articleDetails: ArticleState;
  articleDetailsPage: ArticleDetailsPageState;
  addCommentForm: AddCommentFormState;
  articlesPage: ArticlesPageState;
}

export const rootReducer = combineSlices(
  counterSlice,
  userSlice,
  scrollRestorationSlice,
  rtkApi,
).withLazyLoadedSlices<LazyLoadedSlices>();

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: { api } } }).concat(
        rtkApi.middleware,
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
