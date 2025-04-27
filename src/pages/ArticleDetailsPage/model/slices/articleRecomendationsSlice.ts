import { Article } from "@/entities/Article";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchArticleRecomendations } from "../services/fetchArticleRecomendations";
import { ArticleRecomendationsState } from "../types/articleRecomendations";

export const RecomendationAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

const initialState: ArticleRecomendationsState = {
  isLoading: false,
  error: undefined,
  recomendations: [],
};

export const articleRecomendationsSlice = createSlice({
  name: "articleRecomendationsSlice",
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recomendations = action.payload;
      })
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const articleRecomendationsActions = articleRecomendationsSlice.actions;
export const articleRecomendationsReducer = articleRecomendationsSlice.reducer;
