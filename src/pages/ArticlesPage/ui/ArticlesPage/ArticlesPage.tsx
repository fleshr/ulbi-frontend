import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { useAppDispatch } from "@/shared/model";
import { VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo, useCallback, useLayoutEffect } from "react";
import { fetchNextArticlePage } from "../../model/services/fetchNextArticlePage";
import { articlesPageSlice } from "../../model/slices/articlesPageSlice";
import { ArticlesInfiniteList } from "../ArticlesInfiniteList/ArticlesInfiniteList";
import { ArticlesPageFilter } from "../ArticlesPageFilter/ArticlesPageFilter";

export const ArticlesPage: FC = memo(function ArticlesPage() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    articlesPageSlice.injectInto(rootReducer);
  }, []);

  const handleScrollEnd = useCallback(() => {
    void dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={handleScrollEnd}>
      <VStack gap={32}>
        <ArticlesPageFilter />
        <ArticlesInfiniteList />
      </VStack>
    </Page>
  );
});

export default ArticlesPage;
