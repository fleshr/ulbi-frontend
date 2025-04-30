import { classNames } from "@/shared/lib";
import type { FC, MouseEvent, PropsWithChildren } from "react";
import { useCallback, useEffect } from "react";
import { HStack } from "../Flex";
import styles from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
    <div
      data-testid="Modal"
      className={classNames(styles.modal, { [styles.open]: isOpen })}
    >
      <HStack
        justify="center"
        fullWidth
        fullHeight
        className={styles.overlay}
        onClick={handleOverlayClick}
      >
        <div onClick={handleContentClick} className={styles.content}>
          {children}
        </div>
      </HStack>
    </div>
  );
};
