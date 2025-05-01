import { classNames } from "@/shared/lib";
import { useModal } from "@/shared/lib/hooks";
import { memo, type ReactNode } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import styles from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Drawer = memo(function Drawer({
  className,
  children,
  isOpen,
  onClose,
  lazy = false,
}: DrawerProps) {
  const { close, isMounted } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(styles.drawer, { [styles.open]: isOpen }, [
          className,
        ])}
      >
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
});
