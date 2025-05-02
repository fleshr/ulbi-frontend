import { rootReducer } from "@/app/providers";
import { combineSlices } from "@reduxjs/toolkit";
import { articleCommentsReducer } from "./articleCommentsSlice";
import { articleRecomendationsReducer } from "./articleRecomendationsSlice";

export const articleDetailsPageReducer = combineSlices({
  comments: articleCommentsReducer,
  recomendations: articleRecomendationsReducer,
});

const injectedArticleDetailsPageReducer = rootReducer.inject({
  reducerPath: "articleDetailsPage",
  reducer: articleDetailsPageReducer,
});

export const getArticleRecomendations =
  injectedArticleDetailsPageReducer.selector(
    (state) => state.articleDetailsPage.recomendations.recomendations,
  );
