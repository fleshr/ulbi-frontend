import type { ArticleCommentsState } from "./articleComments";
import type { ArticleRecomendationsState } from "./articleRecomendations";

export interface ArticleDetailsPageState {
  comments: ArticleCommentsState;
  recomendations: ArticleRecomendationsState;
}
