import { lazy } from "react";

export const ArticlesPageLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./ArticlesPage");
});
