import { lazy } from "react";

export const ArticleDetailsPageLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./ArticleDetailsPage");
});
