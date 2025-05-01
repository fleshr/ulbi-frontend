import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { Popover } from "@/shared/ui";
import { memo } from "react";

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(function NotificationsButton({
  className,
}: NotificationsButtonProps) {
  return (
    <Popover
      anchor="bottom end"
      className={className}
      trigger={<NotificationIcon />}
    >
      <NotificationList />
    </Popover>
  );
});
