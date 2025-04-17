import { FC, PropsWithChildren, useCallback, useEffect } from "react";
import styles from "./Modal.module.scss";
import { classNames } from "@/shared/lib";

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

  const handleContentClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={classNames(styles.Modal, { [styles.open]: isOpen })}>
      <div onClick={handleOverlayClick} className={styles.overlay}>
        <div onClick={handleContentClick} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
