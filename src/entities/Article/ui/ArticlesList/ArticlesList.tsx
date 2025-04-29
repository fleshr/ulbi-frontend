import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui";
import { useVirtualizer, VirtualItem } from "@tanstack/react-virtual";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from "../../model/types";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { ArticleCardSkeleton } from "../ArticleCardSkeleton/ArticleCardSkeleton";
import styles from "./ArticlesList.module.scss";

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticlesList = memo(function ArticlesList({
  className,
  articles,
  view = "small",
  isLoading = false,
  target = "_self",
}: ArticlesListProps) {
  const isSmall = view === "small";
  const { t } = useTranslation("translation", { keyPrefix: "ArticlesList" });
  const rowsCount = isSmall ? Math.ceil(articles.length / 3) : articles.length;

  const parent = document.getElementById("PAGE");

  const virtualizer = useVirtualizer({
    count: isLoading ? rowsCount + 1 : rowsCount,
    getScrollElement: () => parent,
    estimateSize: () => (isSmall ? 301 : 434),
  });

  if (!isLoading && !articles.length) {
    return <Text size="lg" text={t("Статьи не найдены")} />;
  }

  const items = virtualizer.getVirtualItems();

  const renderArticle = (article: Article) => {
    return (
      <ArticleCard
        target={target}
        key={article.id}
        article={article}
        view={view}
      />
    );
  };

  const renderSkeleton = () => <ArticleCardSkeleton />;

  const renderRow = (virtualRow: VirtualItem) => {
    const isSkeleton = isLoading && virtualRow.index >= rowsCount;
    const startIndex = isSmall ? virtualRow.index * 3 : virtualRow.index;
    const endIndex = isSmall ? startIndex + 3 : virtualRow.index + 1;
    const items = isSkeleton
      ? new Array(endIndex - startIndex).fill(0)
      : articles.slice(startIndex, endIndex);

    return (
      <div
        key={virtualRow.key}
        data-index={virtualRow.index}
        ref={virtualizer.measureElement}
        className={classNames(styles.row, { [styles.rowSmall]: isSmall }, [])}
      >
        {items.map(isSkeleton ? renderSkeleton : renderArticle)}
      </div>
    );
  };

  return (
    <div
      style={{ height: virtualizer.getTotalSize() }}
      className={classNames(styles.container, {}, [className])}
    >
      <div
        className={styles.listWrapper}
        style={{ transform: `translateY(${String(items[0]?.start ?? 0)}px)` }}
      >
        {items.map(renderRow)}
      </div>
    </div>
  );
});
