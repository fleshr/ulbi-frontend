import { ArticlesList } from "@/entities/Article";
import { useInitialEffect } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import type { FC } from "react";
import { memo } from "react";
import { articlesPageSelectors } from "../../model/selectors/articlePageSelectors";
import { initArticlesPage } from "../../model/services/initArticlesPage";

export const ArticlesInfiniteList: FC = memo(function ArticlesInfiniteList() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(articlesPageSelectors.getIsLoading);
  const articles = useAppSelector(articlesPageSelectors.getArticles);
  const view = useAppSelector(articlesPageSelectors.getView);

  useInitialEffect(() => {
    void dispatch(initArticlesPage());
  });

  return <ArticlesList articles={articles} isLoading={isLoading} view={view} />;
});
