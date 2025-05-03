export const RoutePath = {
  getMainRoute: () => "/",
  getAboutRoute: () => "/about",
  getProfileRoute: (id: string) => `/profile/${id}`,
  getArticlesRoute: () => "/articles",
  getArticleRoute: (id: string) => `/articles/${id}`,
  getArticleCreateRoute: () => "/articles/new",
  getArticleEditRoute: (id: string) => `/articles/${id}/edit`,
  getAdminPanelRoute: () => "/admin",
  getForbiddenRoute: () => "/forbidden",
  getNotFoundRoute: () => "*",
} as const;
