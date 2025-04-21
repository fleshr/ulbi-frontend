import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { Comment } from "@/entities/Comment";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId";
import { CommentsState } from "./types";

export const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

const initialState: CommentsState = commentsAdapter.getInitialState({
  isLoading: false,
  error: undefined,
});

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
  (state) => state.articleDetailsComments ?? initialState,
);

export const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
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

export const enjectedArticleDetailsCommentsSlice =
  articleDetailsCommentsSlice.injectInto(rootReducer);
export const articleDetailsCommentsActions =
  enjectedArticleDetailsCommentsSlice.actions;

export const getIsLoading = (state: RootState) =>
  state.articleDetailsComments?.isLoading;
