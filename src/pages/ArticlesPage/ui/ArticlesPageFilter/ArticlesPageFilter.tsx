import type {
  ArticleOrder,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article";
import {
  ArticleSortSelector,
  ArticlesViewSelector,
  ArticleTypeTabs,
} from "@/entities/Article";
import { useDebounce } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { HStack, Input, VStack } from "@/shared/ui";
import { memo, useCallback } from "react";
import {
  articlesPageActions,
  articlesPageSelectors,
} from "../../model/articlesPageSlice";
import { fetchArticles } from "../../model/services/fetchArticles";

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo(function ArticlesPageFilter({
  className,
}: ArticlesPageFilterProps) {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(articlesPageSelectors.getSort);
  const order = useAppSelector(articlesPageSelectors.getOrder);
  const search = useAppSelector(articlesPageSelectors.getSearch);
  const tab = useAppSelector(articlesPageSelectors.getType);
  const view = useAppSelector(articlesPageSelectors.getView);

  const fetchData = useCallback(() => {
    void dispatch(fetchArticles(true));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData);

  const handleSortChange = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleOrderChange = useCallback(
    (newOrder: ArticleOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleTabChange = useCallback(
    (tab: ArticleType) => {
      dispatch(articlesPageActions.setType(tab));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  const handeleViewChange = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  return (
    <VStack gap={8} className={className}>
      <HStack justify="between">
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={handleSortChange}
          onChangeOrder={handleOrderChange}
        />
        <ArticlesViewSelector view={view} onChange={handeleViewChange} />
      </HStack>
      <Input placeholder="Поиск" value={search} onChange={handleSearchChange} />
      <ArticleTypeTabs value={tab} onChangeType={handleTabChange} />
    </VStack>
  );
});
