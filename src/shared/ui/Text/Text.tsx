import { classNames } from "@/shared/lib";
import type { TestProps } from "@/shared/types";
import { memo } from "react";
import styles from "./Text.module.scss";

export type TextVariant = "default" | "error";
export type TextAlign = "left" | "right" | "center";
export type TextSize = "sm" | "md" | "lg";
export type HeadingType = "h1" | "h2" | "h3";

const HeadingMap: Record<TextSize, HeadingType> = {
  sm: "h3",
  md: "h2",
  lg: "h1",
};

interface TextProps extends TestProps {
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
  "data-testid": dataTestId = "Text",
}: TextProps) {
  const style = [className, styles[variant], styles[align], styles[size]];
  const Heading = HeadingMap[size];

  return (
    <div data-testid={dataTestId} className={classNames("", {}, style)}>
      {title && (
        <Heading data-testid={`${dataTestId}.Heading`} className={styles.title}>
          {title}
        </Heading>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={styles.text}>
          {text}
        </p>
      )}
    </div>
  );
});
