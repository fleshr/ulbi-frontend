import { classNames } from "@/shared/lib";
import type { TestProps } from "@/shared/types";
import type { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Flex.module.scss";

type FlexDirection = "row" | "column";
type FlexAlign = "stretch" | "start" | "center" | "end";
type FlexJustify = "start" | "center" | "between" | "end";
type FlexGap = 0 | 4 | 8 | 16 | 32;

export interface FlexProps extends HTMLAttributes<HTMLDivElement>, TestProps {
  children?: ReactNode;
  className?: string;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: FlexGap;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const alignClasses: Record<FlexAlign, string> = {
  stretch: styles.alignStretch,
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  between: styles.justifyBetween,
  end: styles.justifyEnd,
};

const gapClasses: Record<FlexGap, string> = {
  0: "",
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  32: styles.gap32,
};

export const Flex: FC<FlexProps> = ({
  className,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = 0,
  fullWidth = false,
  fullHeight = false,
  "data-testid": dataTestId = "Flex",
  ...props
}) => {
  const mods = {
    [styles.fullWidth]: fullWidth,
    [styles.fullHeight]: fullHeight,
  };
  const classes = [
    directionClasses[direction],
    alignClasses[align],
    justifyClasses[justify],
    gapClasses[gap],
    className,
  ];

  return (
    <div
      data-testid={dataTestId}
      className={classNames(styles.flex, mods, classes)}
      {...props}
    />
  );
};
