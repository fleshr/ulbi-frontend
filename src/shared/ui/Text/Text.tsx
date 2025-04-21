import { classNames } from "@/shared/lib";
import { memo } from "react";
import styles from "./Text.module.scss";

export type TextVariant = "default" | "error";
export type TextAlign = "left" | "right" | "center";
export type TextSize = "md" | "lg";

interface TextProps {
  className?: string;
  variant?: TextVariant;
  title?: string;
  text?: string;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(function Text({
  className,
  title,
  text,
  variant = "default",
  align = "left",
  size = "md",
}: TextProps) {
  const style = [className, styles[variant], styles[align], styles[size]];

  return (
    <div className={classNames("", {}, style)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
