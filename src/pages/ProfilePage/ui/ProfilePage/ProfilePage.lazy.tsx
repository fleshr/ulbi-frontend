import { lazy } from "react";

export const ProfilePageLazy = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./ProfilePage");
});
