import { classNames } from "@/shared/lib";
import { memo, type ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card = memo(function Card({ className, children }: CardProps) {
  return (
    <div className={classNames(styles.card, {}, [className])}>{children}</div>
  );
});
