import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { createSlice } from "@reduxjs/toolkit";
import { fetchArticleDetails } from "./services/fetchArticleDetails";
import { ArticleState } from "./types";

const initialState: ArticleState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  selectors: {
    getData: (state) => state.data,
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = undefined;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const enjectedArticleDetailsSlice =
  articleDetailsSlice.injectInto(rootReducer);
export const articleDetailsReducer = enjectedArticleDetailsSlice.reducer;
export const articleDetailsActions = enjectedArticleDetailsSlice.actions;
export const articleDetailsSelectors = enjectedArticleDetailsSlice.selectors;
