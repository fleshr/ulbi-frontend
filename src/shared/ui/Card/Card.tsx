import { classNames } from "@/shared/lib";
import { TestProps } from "@/shared/types";
import { memo, type ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps extends TestProps {
  className?: string;
  children?: ReactNode;
}

export const Card = memo(function Card({
  className,
  children,
  "data-testid": dataTestId = "Card",
}: CardProps) {
  return (
    <div
      data-testid={dataTestId}
      className={classNames(styles.card, {}, [className])}
    >
      {children}
    </div>
  );
});
