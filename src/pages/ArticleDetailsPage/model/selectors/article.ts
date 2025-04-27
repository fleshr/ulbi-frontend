import { articleDetailsSelectors } from "@/entities/Article";
import { userSelectors } from "@/entities/User";
import { createSelector } from "@reduxjs/toolkit";

export const getCanEditArticle = createSelector(
  userSelectors.getUserData,
  articleDetailsSelectors.getData,
  (user, article) => user && article && user.id === article.user.id,
);
