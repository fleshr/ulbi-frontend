import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "@/pages/ArticlesPage/model/articlesPageSlice";
import { fetchArticles } from "@/pages/ArticlesPage/model/services/fetchArticles";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
