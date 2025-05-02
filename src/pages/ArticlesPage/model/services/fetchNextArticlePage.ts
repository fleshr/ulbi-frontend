import type { ThunkOptions } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { articlesPageActions } from "../actions/articlePageActions";
import { articlesPageSelectors } from "../selectors/articlePageSelectors";
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
    void dispatch(fetchArticles());
  }

  return undefined;
});
