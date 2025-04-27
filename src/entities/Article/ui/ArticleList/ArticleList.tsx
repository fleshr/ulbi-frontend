import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { Article, ArticleView } from "../../model/types";
import { ArticleListItem } from "../ArticleListItems/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  view = "small",
  isLoading = false,
  target = "_self",
}: ArticleListProps) {
  const { t } = useTranslation("translation", { keyPrefix: "ArticleList" });

  if (!isLoading && !articles.length) {
    return <Text size="lg" text={t("Статьи не найдены")} />;
  }

  return (
    <div className={classNames(styles.list, {}, [className, styles[view]])}>
      {articles.map((article) => (
        <ArticleListItem
          target={target}
          key={article.id}
          article={article}
          view={view}
        />
      ))}
      {isLoading &&
        new Array(view === "big" ? 3 : 9)
          .fill(0)
          .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
          ))}
    </div>
  );
});
