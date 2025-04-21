import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { Comment } from "@/entities/Comment";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkOptions<string>
>(
  "articleDetailsComments/fetchCommentsByArticleId",
  async (articleId, { rejectWithValue, extra: { api } }) => {
    if (!articleId) {
      return rejectWithValue("error");
    }

    try {
      const { data } = await api.get<Comment[]>("/comments", {
        params: {
          articleId,
          _expand: "user",
        },
      });

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
