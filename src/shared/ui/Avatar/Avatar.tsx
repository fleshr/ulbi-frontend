import { classNames } from "@/shared/lib";
import type { CSSProperties } from "react";
import { memo, useMemo } from "react";
import UserIcon from "../../assets/icons/user-filled.svg";
import { AppImage } from "../AppImage/AppImage";
import { Skeleton } from "../Skeleton/Skeleton";
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
    () => ({ width: size, height: size }),
    [size],
  );

  const fallback = <Skeleton radius="50%" width={size} />;
  const errorFallback = <UserIcon width={size} height={size} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(styles.avatar, {}, [className])}
      src={src}
      alt={alt}
      style={styleSize}
    />
  );
});
