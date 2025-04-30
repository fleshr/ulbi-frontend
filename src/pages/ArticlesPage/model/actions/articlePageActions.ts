import type {
  ArticleOrder,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import { createAction } from "@reduxjs/toolkit";

export const articlesPageActions = {
  setView: createAction<ArticleView>("articlePage/setView"),
  setSearch: createAction<string>("articlePage/setSearch"),
  setSort: createAction<ArticleSortField>("articlePage/setSort"),
  setOrder: createAction<ArticleOrder>("articlePage/setOrder"),
  setType: createAction<ArticleType>("articlePage/setType"),
  initView: createAction("articlePage/initView"),
  setPage: createAction<number>("articlePage/setPage"),
  setHasMore: createAction<boolean>("articlePage/setHasMore"),
};
