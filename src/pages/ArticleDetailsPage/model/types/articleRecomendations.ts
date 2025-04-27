import { Article } from "@/entities/Article";

export interface ArticleRecomendationsState {
  isLoading: boolean;
  error?: string;
  recomendations: Article[];
}
