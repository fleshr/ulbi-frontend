import { ArticleCommentsState } from "./articleComments";
import { ArticleRecomendationsState } from "./articleRecomendations";

export interface ArticleDetailsPageState {
  comments: ArticleCommentsState;
  recomendations: ArticleRecomendationsState;
}
