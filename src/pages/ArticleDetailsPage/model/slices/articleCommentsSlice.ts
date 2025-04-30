import type { Comment } from "@/entities/Comment";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId";
import type { ArticleCommentsState } from "../types/articleComments";

export const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

const initialState: ArticleCommentsState = commentsAdapter.getInitialState({
  isLoading: false,
  error: undefined,
});

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
  (state) => state.articleDetailsPage?.comments ?? initialState,
);

export const articleCommentsSlice = createSlice({
  name: "articleCommentsSlice",
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false;
        commentsAdapter.addMany(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articleCommentsSliceActions = articleCommentsSlice.actions;
export const articleCommentsReducer = articleCommentsSlice.reducer;

export const getIsLoading = (state: RootState) =>
  state.articleDetailsPage?.comments.isLoading;
