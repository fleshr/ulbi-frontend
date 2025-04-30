import { ArticleType } from "@/entities/Article";
import type { ArticlesPageState } from "../model/types/articlePage";

export const mockedArticlesPage: ArticlesPageState = {
  articles: [],
  view: "small",
  page: 1,
  limit: 9,
  hasMore: false,
  _inited: true,
  search: "",
  order: "asc",
  sort: "views",
  type: ArticleType.ALL,
};
