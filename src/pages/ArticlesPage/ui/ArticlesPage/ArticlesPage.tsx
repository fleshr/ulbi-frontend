import {
  ArticleList,
  ArticlesViewSelector,
  ArticleView,
} from "@/entities/Article";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Page } from "@/shared/ui";
import { FC, memo, useCallback } from "react";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../../model/articlesPageSlice";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { useInitialEffect } from "@/shared/lib/hooks";
import { initArticlesPage } from "../../model/services/initArticlesPage";

export const ArticlesPage: FC = memo(function ArticlesPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(articlesPageSelectors.getIsLoading);
  const articles = useAppSelector(articlesPageSelectors.getArticles);
  const view = useAppSelector(articlesPageSelectors.getView);

  const handleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const handleScrollEnd = useCallback(() => {
    if (__PROJECT__ !== "storybook") {
      void dispatch(fetchNextArticlePage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    void dispatch(initArticlesPage());
  });

  return (
    <Page onScrollEnd={handleScrollEnd}>
      <ArticlesViewSelector view={view} onChange={handleViewChange} />
      <ArticleList articles={articles} isLoading={isLoading} view={view} />
    </Page>
  );
});

export default ArticlesPage;
