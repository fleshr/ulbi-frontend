import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types";

export const fetchArticleDetails = createAsyncThunk<
  Article,
  string,
  ThunkOptions<string>
>(
  "arcticleDetails/fetchArticleDetails",
  async (articleId, { rejectWithValue, extra: { api } }) => {
    try {
      const { data } = await api.get<Article | undefined>(
        `/articles/${articleId}`,
        {
          params: {
            _expand: "user",
          },
        },
      );

      if (!data) {
        return rejectWithValue("error");
      }

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
