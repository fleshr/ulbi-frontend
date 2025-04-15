import { FC } from "react";
import { classNames } from "@/shared/lib";
import { Link, LinkProps } from "react-router";
import styles from "./AppLink.module.scss";

type Variant = "primary" | "secondary";

type AppLinkProps = LinkProps & {
  variant?: Variant;
  className?: string;
};

export const AppLink: FC<AppLinkProps> = ({
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[variant]])}
      {...props}
    />
  );
};
