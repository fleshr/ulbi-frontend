import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Button.module.scss";

type Variant = "clear";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: Variant;
};

export const Button: FC<ButtonProps> = ({
  className,
  variant = "clear",
  ...props
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[variant]])}
      {...props}
    />
  );
};
