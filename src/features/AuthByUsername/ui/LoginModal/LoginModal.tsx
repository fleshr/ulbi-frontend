import { Modal, Portal } from "@/shared/ui";
import { FC, Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginFormLazy />
        </Suspense>
      </Modal>
    </Portal>
  );
};
