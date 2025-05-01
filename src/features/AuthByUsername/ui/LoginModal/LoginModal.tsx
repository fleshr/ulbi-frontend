import { Modal } from "@/shared/ui";
import type { FC } from "react";
import { Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
