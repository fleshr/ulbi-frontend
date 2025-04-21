import { AboutPageLazy } from "@/pages/AboutPage";
import { ArticleDetailsPageLazy } from "@/pages/ArticleDetailsPage";
import { ArticlesPageLazy } from "@/pages/ArticlesPage";
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
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteItem[] = [
  { path: RoutePath.main, element: <MainPageLazy /> },
  { path: RoutePath.about, element: <AboutPageLazy /> },
  { path: RoutePath.profile, element: <ProfilePageLazy />, authOnly: true },
  { path: RoutePath.articles, element: <ArticlesPageLazy />, authOnly: true },
  {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  { path: RoutePath.not_found, element: <NotFoundPageLazy /> },
];
