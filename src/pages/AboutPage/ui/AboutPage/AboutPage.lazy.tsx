import { lazy } from "react";

export const AboutPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./AboutPage");
});
