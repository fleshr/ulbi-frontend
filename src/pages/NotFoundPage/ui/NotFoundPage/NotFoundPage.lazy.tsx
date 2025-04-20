import { lazy } from "react";

export const NotFoundPageLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./NotFoundPage");
});
