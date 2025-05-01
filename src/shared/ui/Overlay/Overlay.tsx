import { classNames } from "@/shared/lib";
import { memo } from "react";
import styles from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(function Overlay({
  className,
  onClick,
}: OverlayProps) {
  return (
    <div
      className={classNames(styles.overlay, {}, [className])}
      onClick={onClick}
    />
  );
});
