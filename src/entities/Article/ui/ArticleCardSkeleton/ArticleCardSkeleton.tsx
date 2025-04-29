import { classNames } from "@/shared/lib";
import { HStack, Skeleton, VStack } from "@/shared/ui";
import { memo } from "react";
import { ArticleView } from "../../model/types";
import styles from "./ArticleCardSkeleton.module.scss";

interface ArticleCardSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleCardSkeleton = memo(function ArticleCardSkeleton({
  className,
  view = "small",
}: ArticleCardSkeletonProps) {
  if (view === "big") {
    return (
      <div className={classNames(styles.article, {}, [className, styles.big])}>
        <VStack gap={8} className={styles.header}>
          <HStack justify="between">
            <HStack gap={4}>
              <Skeleton width={20} radius="50%" />
              <Skeleton width={100} height={16} />
            </HStack>
            <Skeleton width={100} height={16} />
          </HStack>
          <Skeleton width={240} height={24} />
          <Skeleton width={100} height={16} />
        </VStack>
        <div className={styles.imgWrapper}>
          <Skeleton height={200} />
        </div>
        <VStack gap={8} className={styles.content}>
          <Skeleton height={20} />
          <Skeleton width="50%" height={20} />
          <Skeleton className={styles.button} width={120} height={40} />
        </VStack>
      </div>
    );
  }

  return (
    <div className={classNames(styles.article, {}, [className, styles.small])}>
      <Skeleton height={200} />
      <div className={styles.content}>
        <HStack justify="between">
          <Skeleton width={120} height={16} />
          <Skeleton width={80} height={16} />
        </HStack>
        <Skeleton className={styles.title} width="80%" height={24} />
      </div>
    </div>
  );
});
