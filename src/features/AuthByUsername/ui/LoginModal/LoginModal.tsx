import { Modal, Portal } from "@/shared/ui";
import { FC } from "react";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <LoginForm />
      </Modal>
    </Portal>
  );
};

export default LoginModal;
