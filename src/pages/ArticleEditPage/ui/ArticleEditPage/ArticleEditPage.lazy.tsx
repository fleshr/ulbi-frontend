import { lazy } from "react";

export const ArticleEditPageLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./ArticleEditPage");
});
