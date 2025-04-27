import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { Article } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticleRecomendations = createAsyncThunk<
  Article[],
  undefined,
  ThunkOptions<string>
>(
  "articleDetailsPage/fetchArticleRecomendations",
  async (_, { rejectWithValue, extra: { api } }) => {
    try {
      const { data } = await api.get<Article[]>("/articles", {
        params: { _limit: 4 },
      });

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
