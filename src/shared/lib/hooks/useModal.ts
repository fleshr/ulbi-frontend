import { useCallback, useEffect, useState } from "react";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useModal = ({ isOpen, onClose }: UseModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return { close, isMounted };
};
