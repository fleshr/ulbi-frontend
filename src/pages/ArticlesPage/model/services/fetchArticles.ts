import type { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import type { Article } from "@/entities/Article";
import { ArticleType } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../articlesPageSlice";

export const fetchArticles = createAsyncThunk<
  Article[],
  boolean | undefined,
  ThunkOptions<string>
>(
  "articlesPage/fetchArticles",
  async (_, { rejectWithValue, dispatch, getState, extra: { api } }) => {
    const page = articlesPageSelectors.getPage(getState());
    const limit = articlesPageSelectors.getLimit(getState());
    const order = articlesPageSelectors.getOrder(getState());
    const sort = articlesPageSelectors.getSort(getState());
    const search = articlesPageSelectors.getSearch(getState());
    const type = articlesPageSelectors.getType(getState());

    try {
      const { data } = await api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (limit > data.length) {
        dispatch(articlesPageActions.setHasMore(false));
      }

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
