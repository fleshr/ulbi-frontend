import { ArticleList } from "@/entities/Article";
import { useInitialEffect } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Page } from "@/widgets/Page";
import { FC, memo, useCallback } from "react";
import { articlesPageSelectors } from "../../model/articlesPageSlice";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { ArticlesPageFilter } from "../ArticlesPageFilter/ArticlesPageFilter";
import styles from "./ArticlesPage.module.scss";

export const ArticlesPage: FC = memo(function ArticlesPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(articlesPageSelectors.getIsLoading);
  const articles = useAppSelector(articlesPageSelectors.getArticles);
  const view = useAppSelector(articlesPageSelectors.getView);

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
      <ArticlesPageFilter />
      <ArticleList
        className={styles.list}
        articles={articles}
        isLoading={isLoading}
        view={view}
      />
    </Page>
  );
});

export default ArticlesPage;
