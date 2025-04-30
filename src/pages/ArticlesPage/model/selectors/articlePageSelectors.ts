import { ArticleType } from "@/entities/Article";
import { createSelector } from "@reduxjs/toolkit";

const getArticlePage = (state: RootState) => state.articlesPage;

const getIsLoading = createSelector(
  getArticlePage,
  (state) => state?.isLoading,
);

const getArticles = createSelector(
  getArticlePage,
  (state) => state?.articles ?? [],
);

const getView = createSelector(
  getArticlePage,
  (state) => state?.view ?? "small",
);

const getPage = createSelector(getArticlePage, (state) => state?.page ?? 1);

const getHasMore = createSelector(
  getArticlePage,
  (state) => state?.hasMore ?? true,
);

const getError = createSelector(getArticlePage, (state) => state?.error ?? "");

const getLimit = createSelector(getArticlePage, (state) => state?.limit ?? 9);

const getInited = createSelector(
  getArticlePage,
  (state) => state?._inited ?? false,
);

const getSearch = createSelector(
  getArticlePage,
  (state) => state?.search ?? "",
);

const getOrder = createSelector(
  getArticlePage,
  (state) => state?.order ?? "asc",
);

const getSort = createSelector(
  getArticlePage,
  (state) => state?.sort ?? "views",
);

const getType = createSelector(
  getArticlePage,
  (state) => state?.type ?? ArticleType.ALL,
);

export const articlesPageSelectors = {
  getIsLoading,
  getArticles,
  getView,
  getPage,
  getHasMore,
  getError,
  getLimit,
  getInited,
  getSearch,
  getOrder,
  getSort,
  getType,
};
