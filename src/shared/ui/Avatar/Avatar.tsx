import { classNames } from "@/shared/lib";
import { CSSProperties, memo, useMemo } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = memo(function Avatar({
  className,
  src,
  alt,
  size = 50,
}: AvatarProps) {
  const styleSize: CSSProperties = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styleSize}
    />
  );
});
