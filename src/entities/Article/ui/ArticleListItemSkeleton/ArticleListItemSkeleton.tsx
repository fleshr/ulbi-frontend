import { classNames } from "@/shared/lib";
import { Skeleton } from "@/shared/ui";
import { memo } from "react";
import { ArticleView } from "../../model/types";
import styles from "./ArticleListItemSkeleton.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton({
  className,
  view = "small",
}: ArticleListItemSkeletonProps) {
  if (view === "big") {
    return (
      <div className={classNames(styles.article, {}, [className, styles.big])}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.user}>
              <Skeleton width={20} radius="50%" />
              <Skeleton width={100} height={16} />
            </div>
            <Skeleton width={100} height={16} />
          </div>
          <Skeleton width={240} height={24} />
          <Skeleton width={100} height={16} />
        </div>
        <div className={styles.imgWrapper}>
          <Skeleton height={200} />
        </div>
        <div className={styles.content}>
          <Skeleton height={20} />
          <Skeleton width="50%" height={20} />
          <Skeleton className={styles.button} width={120} height={40} />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.article, {}, [className, styles.small])}>
      <div className={styles.imgWrapper}>
        <Skeleton height={200} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <Skeleton width={120} height={16} />
          <div className={styles.views}>
            <Skeleton width={80} height={16} />
          </div>
        </div>
        <Skeleton className={styles.title} width="80%" height={24} />
      </div>
    </div>
  );
});
