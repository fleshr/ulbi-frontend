import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { Article } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk<
  Article[],
  undefined,
  ThunkOptions<string>
>(
  "articlesPage/fetchArticles",
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const { data } = await api.get<Article[]>("/articles", {
        params: { _expand: "user" },
      });

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
