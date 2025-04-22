import {
  ArticleList,
  ArticlesViewSelector,
  ArticleView,
} from "@/entities/Article";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { FC, memo, useCallback, useEffect } from "react";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../../model/articlesPageSlice";
import { fetchArticles } from "../../model/services/fetchArticles";

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

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      void dispatch(fetchArticles());
      dispatch(articlesPageActions.initView());
    }
  }, [dispatch]);

  return (
    <div>
      <ArticlesViewSelector view={view} onChange={handleViewChange} />
      <ArticleList articles={articles} isLoading={isLoading} view={view} />
    </div>
  );
});

export default ArticlesPage;
