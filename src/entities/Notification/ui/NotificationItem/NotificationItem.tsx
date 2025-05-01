import { classNames } from "@/shared/lib";
import { Text, VStack } from "@/shared/ui";
import { memo } from "react";
import type { Notification } from "../../model/types/notification";
import styles from "./NotificationItem.module.scss";

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo(function NotificationItem({
  className,
  notification: { title, description },
}: NotificationItemProps) {
  return (
    <VStack className={classNames(styles.notification, {}, [className])}>
      <Text title={title} text={description} size="sm" />
    </VStack>
  );
});
