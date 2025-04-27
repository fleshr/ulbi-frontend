import { AboutPageLazy } from "@/pages/AboutPage";
import { ArticleDetailsPageLazy } from "@/pages/ArticleDetailsPage";
import { ArticleEditPageLazy } from "@/pages/ArticleEditPage";
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
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_CREATE]: "/articles/new",
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteItem[] = [
  { path: RoutePath.main, element: <MainPageLazy /> },
  { path: RoutePath.about, element: <AboutPageLazy /> },
  {
    path: `${RoutePath.profile}/:id`,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  { path: RoutePath.articles, element: <ArticlesPageLazy />, authOnly: true },
  {
    path: `${RoutePath.articles}/:id`,
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.article_create,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.article_edit,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  { path: RoutePath.not_found, element: <NotFoundPageLazy /> },
];
