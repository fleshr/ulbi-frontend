import { classNames } from "@/shared/lib";
import {
  memo,
  useCallback,
  useEffect,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import styles from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = memo(function Drawer({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleOverlayClick = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const handleContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(styles.drawer, { [styles.open]: isOpen }, [
          className,
        ])}
      >
        <Overlay onClick={handleOverlayClick} />
        <div onClick={handleContentClick} className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
