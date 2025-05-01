import { VStack } from "@/shared/ui";
import { memo } from "react";
import { useGetNofigicationsQuery } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { NotificationItemSkeleton } from "../NotificationItemSkeleton/NotificationItemSkeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(function NotificationList({
  className,
}: NotificationListProps) {
  const { data: notifications, isLoading } =
    useGetNofigicationsQuery(undefined);

  return (
    <VStack gap={8} className={className}>
      {isLoading &&
        Array(3)
          .fill(0)
          .map((_, index) => <NotificationItemSkeleton key={index} />)}
      {!isLoading &&
        notifications?.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
    </VStack>
  );
});
