import { classNames } from "@/shared/lib";
import type { FC } from "react";
import { memo } from "react";
import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./AppLink.module.scss";

type Variant = "primary" | "secondary" | "outline";

type AppLinkProps = LinkProps & {
  variant?: Variant;
  className?: string;
};

export const AppLink: FC<AppLinkProps> = memo(function AppLink({
  className,
  variant = "primary",
  ...props
}: AppLinkProps) {
  return (
    <Link
      className={classNames(styles.appLink, {}, [className, styles[variant]])}
      {...props}
    />
  );
});
