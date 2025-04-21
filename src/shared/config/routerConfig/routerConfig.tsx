import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { NotFoundPageLazy } from "@/pages/NotFoundPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";
import { ReactElement } from "react";

export interface RouteItem {
  path: string;
  element: ReactElement;
  authOnly?: boolean;
}

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

export const routeConfig: RouteItem[] = [
  { path: RoutePath.main, element: <MainPageLazy /> },
  { path: RoutePath.about, element: <AboutPageLazy /> },
  { path: RoutePath.profile, element: <ProfilePageLazy />, authOnly: true },
  { path: RoutePath.not_found, element: <NotFoundPageLazy /> },
];
