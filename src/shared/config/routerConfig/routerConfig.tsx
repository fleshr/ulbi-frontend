import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";
import { NotFoundPageLazy } from "@/pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
  { path: RoutePath.main, element: <MainPageLazy /> },
  { path: RoutePath.about, element: <AboutPageLazy /> },
  { path: RoutePath.profile, element: <ProfilePageLazy /> },
  { path: RoutePath.not_found, element: <NotFoundPageLazy /> },
];
