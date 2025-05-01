import { Skeleton, VStack } from "@/shared/ui";
import { type FC, memo } from "react";
import styles from "./NotificationItemSkeleton.module.scss";

export const NotificationItemSkeleton: FC = memo(
  function NotificationItemSkeleton() {
    return (
      <VStack gap={8} className={styles.notification}>
        <Skeleton height={16} width="50%" />
        <Skeleton height={14} width="25%" />
      </VStack>
    );
  },
);
