import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import { Drawer, Popover } from "@/shared/ui";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = memo(function NotificationsButton({
  className,
}: NotificationsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = <NotificationIcon onClick={onOpenDrawer} />;

  return (
    <>
      <BrowserView>
        <Popover anchor="bottom end" className={className} trigger={trigger}>
          <NotificationList />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
