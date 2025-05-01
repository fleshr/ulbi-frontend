import { classNames } from "@/shared/lib";
import { useModal } from "@/shared/lib/hooks";
import type { FC, PropsWithChildren } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import styles from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  lazy = false,
}) => {
  const { close, isMounted } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        data-testid="Modal"
        className={classNames(styles.modal, { [styles.open]: isOpen })}
      >
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
