import { classNames } from "@/shared/lib";
import { memo } from "react";
import { Article, ArticleView } from "../../model/types";
import { ArticleListItem } from "../ArticleListItems/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItemSkeleton/ArticleListItemSkeleton";
import styles from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
}

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  view = "small",
  isLoading = false,
}: ArticleListProps) {
  return (
    <div className={classNames(styles.list, {}, [className, styles[view]])}>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} view={view} />
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
