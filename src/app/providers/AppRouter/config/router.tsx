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
