import { ArticleType } from "@/entities/Article";
import { ArticlesPageState } from "../model/types";

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
