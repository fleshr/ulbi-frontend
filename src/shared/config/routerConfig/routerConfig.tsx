import { UserRole } from "@/entities/User";
import { AboutPageLazy } from "@/pages/AboutPage";
import { AdminPanelPageLazy } from "@/pages/AdminPanelPage";
import { ArticleDetailsPageLazy } from "@/pages/ArticleDetailsPage";
import { ArticleEditPageLazy } from "@/pages/ArticleEditPage";
import { ArticlesPageLazy } from "@/pages/ArticlesPage";
import { ForbiddenPageLazy } from "@/pages/ForbiddenPage";
import { MainPageLazy } from "@/pages/MainPage";
import { NotFoundPageLazy } from "@/pages/NotFoundPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";
import type { PathRouteProps } from "react-router-dom";

export interface RouteItem extends PathRouteProps {
  authOnly?: boolean;
  roles?: UserRole[];
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  ADMIN_PANEL = "admin_panel",
  FORBIDDEN = "forbidden",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_CREATE]: "/articles/new",
  [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
  [AppRoutes.ADMIN_PANEL]: "/admin",
  [AppRoutes.FORBIDDEN]: "/forbidden",
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
  {
    path: RoutePath.admin_panel,
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: RoutePath.forbidden,
    element: <ForbiddenPageLazy />,
    authOnly: true,
  },
  { path: RoutePath.not_found, element: <NotFoundPageLazy /> },
];
