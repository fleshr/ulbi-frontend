import { Article, ArticleView } from "@/entities/Article";

export interface ArticlesPageState {
  articles: Article[];
  view: ArticleView;
  isLoading?: boolean;
  error?: string;
}
