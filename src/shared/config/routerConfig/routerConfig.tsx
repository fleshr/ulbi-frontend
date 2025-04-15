import { AboutPageLazy } from "@/pages/AboutPage";
import { MainPageLazy } from "@/pages/MainPage";
import { RouteProps } from "react-router";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteProps[] = [
  { path: RoutePath.main, element: <MainPageLazy /> },
  { path: RoutePath.about, element: <AboutPageLazy /> },
];
