import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { articleDetailsSelectors } from "@/entities/Article";
import { Comment } from "@/entities/Comment";
import { userSelectors } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkOptions<string>
>(
  "articleDetailsPage/addCommentForArticle",
  async (text, { rejectWithValue, getState, dispatch, extra: { api } }) => {
    const user = userSelectors.getUserData(getState());
    const article = articleDetailsSelectors.getData(getState());

    if (!user || !article || !text) {
      return rejectWithValue("error");
    }

    try {
      const { data } = await api.post<Comment>("/comments", {
        articleId: article.id,
        userId: user.id,
        text,
      });

      await dispatch(fetchCommentsByArticleId(article.id));

      return data;
    } catch {
      return rejectWithValue("error");
    }
  },
);
