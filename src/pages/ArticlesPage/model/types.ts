import {
  Article,
  ArticleOrder,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article";

export interface ArticlesPageState {
  articles: Article[];
  isLoading?: boolean;
  error?: string;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;
  view: ArticleView;
  search: string;
  order: ArticleOrder;
  sort: ArticleSortField;
  type: ArticleType;
}
