import { lazy } from "react";

export const LoginFormLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./LoginForm");
});
