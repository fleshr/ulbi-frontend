import { classNames } from "@/shared/lib";
import { ButtonHTMLAttributes, memo } from "react";
import styles from "./Button.module.scss";

type Variant = "clear" | "outline" | "filled";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = memo(function Button({
  className,
  variant = "clear",
  size = "md",
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const style = [className, styles[variant], styles[size]];

  return (
    <button
      type={type}
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
});
