import type { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { articlesPageActions } from "../actions/articlePageActions";
import { articlesPageSelectors } from "../selectors/articlePageSelectors";
import { fetchArticles } from "./fetchArticles";

export const initArticlesPage = createAsyncThunk<
  void,
  undefined,
  ThunkOptions<undefined>
>("articlesPage/initArticlesPage", (_, { dispatch, getState }) => {
  const inited = articlesPageSelectors.getInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initView());
    void dispatch(fetchArticles());
  }
});
