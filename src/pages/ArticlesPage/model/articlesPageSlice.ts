import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { ArticleView } from "@/entities/Article";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchArticles } from "./services/fetchArticles";
import { ArticlesPageState } from "./types";

const initialState: ArticlesPageState = {
  view: "small",
  isLoading: false,
  error: undefined,
  articles: [],
  page: 1,
  limit: 9,
  hasMore: true,
  _inited: false,
};

export const articlesPageSlice = createSlice({
  name: "articlesPage",
  initialState,
  selectors: {
    getIsLoading: (state) => state.isLoading,
    getArticles: (state) => state.articles,
    getView: (state) => state.view,
    getPage: (state) => state.page,
    getHasMore: (state) => state.hasMore,
    getError: (state) => state.error,
    getLimit: (state) => state.limit,
    getInited: (state) => state._inited,
  },
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initView: (state) => {
      state.view = (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) ??
        "small") as ArticleView;
      state.limit = state.view === "big" ? 3 : 9;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles.push(...action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const injectedArticlesPageSlice = articlesPageSlice.injectInto(rootReducer);
export const articlesPageReducer = injectedArticlesPageSlice.reducer;
export const articlesPageActions = injectedArticlesPageSlice.actions;
export const articlesPageSelectors = injectedArticlesPageSlice.selectors;
