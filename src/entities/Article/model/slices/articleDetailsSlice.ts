import { rootReducer } from "@/shared/model";
import { createSlice, WithSlice } from "@reduxjs/toolkit";
import { fetchArticleDetails } from "../services/fetchArticleDetails";
import type { ArticleState } from "../types/article";

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

export const {
  actions: articleDetailsActions,
  selectors: articleDetailsSelectors,
} = articleDetailsSlice.injectInto(rootReducer);

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices
    extends WithSlice<typeof articleDetailsSlice> {}
}
