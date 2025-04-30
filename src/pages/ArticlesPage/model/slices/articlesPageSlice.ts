import type { ArticleView } from "@/entities/Article";
import { ArticleType } from "@/entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/constants";
import { createSlice } from "@reduxjs/toolkit";
import { articlesPageActions } from "../actions/articlePageActions";
import { fetchArticles } from "../services/fetchArticles";
import type { ArticlesPageState } from "../types/articlePage";

const initialState: ArticlesPageState = {
  view: "small",
  isLoading: false,
  error: undefined,
  articles: [],
  page: 1,
  limit: 9,
  hasMore: true,
  _inited: false,
  search: "",
  order: "asc",
  sort: "views",
  type: ArticleType.ALL,
};

export const articlesPageSlice = createSlice({
  name: "articlesPage",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        if (action.meta.arg) {
          state.articles = [];
        }
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg) {
          state.articles = action.payload;
        } else {
          state.articles.push(...action.payload);
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(articlesPageActions.setView, (state, action) => {
        state.view = action.payload;
        localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
      })
      .addCase(articlesPageActions.setSearch, (state, action) => {
        state.search = action.payload;
      })
      .addCase(articlesPageActions.setSort, (state, action) => {
        state.sort = action.payload;
      })
      .addCase(articlesPageActions.setOrder, (state, action) => {
        state.order = action.payload;
      })
      .addCase(articlesPageActions.setType, (state, action) => {
        state.type = action.payload;
      })
      .addCase(articlesPageActions.initView, (state) => {
        state.view = (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) ??
          "small") as ArticleView;
        state.limit = state.view === "big" ? 3 : 9;
        state._inited = true;
      })
      .addCase(articlesPageActions.setPage, (state, action) => {
        state.page = action.payload;
      })
      .addCase(articlesPageActions.setHasMore, (state, action) => {
        state.hasMore = action.payload;
      });
  },
});
