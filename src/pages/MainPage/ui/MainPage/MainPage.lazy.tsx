import { lazy } from "react";

export const MainPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./MainPage");
});
