import {
  ArticleList,
  ArticlesViewSelector,
  ArticleView,
} from "@/entities/Article";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Page } from "@/shared/ui";
import { FC, memo, useCallback, useEffect } from "react";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../../model/articlesPageSlice";
import { fetchArticles } from "../../model/services/fetchArticles";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";

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

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(articlesPageActions.initView());
      void dispatch(fetchArticles(1));
    }
  }, [dispatch]);

  return (
    <Page onScrollEnd={handleScrollEnd}>
      <ArticlesViewSelector view={view} onChange={handleViewChange} />
      <ArticleList articles={articles} isLoading={isLoading} view={view} />
    </Page>
  );
});

export default ArticlesPage;
