import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { Article } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../articlesPageSlice";

export const fetchArticles = createAsyncThunk<
  Article[],
  number,
  ThunkOptions<string>
>(
  "articlesPage/fetchArticles",
  async (page, { rejectWithValue, dispatch, getState, extra: { api } }) => {
    const limit = articlesPageSelectors.getLimit(getState());

    try {
      const { data } = await api.get<Article[]>("/articles", {
        params: {
          _expand: "user",
          _limit: limit,
          _page: page,
        },
      });

      if (!data.length) {
        dispatch(articlesPageActions.setHasMore(false));
      }

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
