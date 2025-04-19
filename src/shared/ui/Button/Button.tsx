import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Button.module.scss";

type Variant = "clear" | "outline" | "filled";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = "clear",
  size = "md",
  disabled = false,
  ...props
}) => {
  const style = [className, styles[variant], styles[size]];

  return (
    <button
      disabled={disabled}
      data-testid="Button"
      className={classNames(
        styles.button,
        { [styles.disabled]: disabled },
        style,
      )}
      {...props}
    />
  );
};
