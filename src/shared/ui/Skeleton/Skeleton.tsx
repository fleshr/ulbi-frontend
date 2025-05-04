import { classNames } from "@/shared/lib";
import { memo, useMemo } from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
}

export const Skeleton = memo(function Skeleton({
  className,
  width,
  height = width ?? 30,
  radius,
}: SkeletonProps) {
  const style = useMemo(
    () => ({ width, height, borderRadius: radius }),
    [width, height, radius],
  );

  return (
    <div
      style={style}
      className={classNames(styles.skeleton, {}, [className])}
    />
  );
});
