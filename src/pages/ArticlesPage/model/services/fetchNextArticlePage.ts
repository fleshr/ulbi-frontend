import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../articlesPageSlice";
import { fetchArticles } from "./fetchArticles";

export const fetchNextArticlePage = createAsyncThunk<
  undefined,
  undefined,
  ThunkOptions<string>
>("articlesPage/fetchNextArticlePage", (_, { dispatch, getState }) => {
  const page = articlesPageSelectors.getPage(getState());
  const hasMore = articlesPageSelectors.getHasMore(getState());
  const isLoading = articlesPageSelectors.getIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    void dispatch(fetchArticles(page + 1));
  }

  return undefined;
});
