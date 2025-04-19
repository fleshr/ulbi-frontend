import { FC } from "react";
import { classNames } from "@/shared/lib";
import { Link, LinkProps } from "react-router-dom";
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
      className={classNames(styles.appLink, {}, [className, styles[variant]])}
      {...props}
    />
  );
};
