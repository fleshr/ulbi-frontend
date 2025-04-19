import { FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Text.module.scss";

export type Variant = "default" | "error";

interface TextProps {
  className?: string;
  variant?: Variant;
  title?: string;
  text?: string;
}

export const Text: FC<TextProps> = ({
  className,
  title,
  text,
  variant = "default",
}) => {
  return (
    <div className={classNames("", {}, [className, styles[variant]])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
