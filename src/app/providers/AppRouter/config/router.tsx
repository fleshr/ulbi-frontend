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
import { RoutePath } from "@/shared/constants";
import type { PathRouteProps } from "react-router-dom";

interface RouteItem extends PathRouteProps {
  authOnly?: boolean;
  roles?: UserRole[];
}

export const routeConfig: RouteItem[] = [
  {
    path: RoutePath.getMainRoute(),
    element: <MainPageLazy />,
  },
  {
    path: RoutePath.getAboutRoute(),
    element: <AboutPageLazy />,
  },
  {
    path: RoutePath.getProfileRoute(":id"),
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getArticlesRoute(),
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getArticleRoute(":id"),
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getArticleCreateRoute(),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getArticleEditRoute(":id"),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getAdminPanelRoute(),
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: RoutePath.getForbiddenRoute(),
    element: <ForbiddenPageLazy />,
    authOnly: true,
  },
  {
    path: RoutePath.getNotFoundRoute(),
    element: <NotFoundPageLazy />,
  },
];
