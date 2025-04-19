import { lazy } from "react";

export const LoginModal = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./LoginModal");
});
