import { Article, ArticleView } from "@/entities/Article";

export interface ArticlesPageState {
  articles: Article[];
  view: ArticleView;
  isLoading?: boolean;
  error?: string;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;
}
