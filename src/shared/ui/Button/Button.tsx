import { classNames } from "@/shared/lib";
import type { DataTestId } from "@/shared/types";
import type { ButtonHTMLAttributes } from "react";
import { memo } from "react";
import styles from "./Button.module.scss";

type Variant = "clear" | "outline" | "filled";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    DataTestId {
  variant?: Variant;
  size?: Size;
}

export const Button = memo(function Button({
  className,
  variant = "clear",
  size = "md",
  disabled = false,
  type = "button",
  "data-testid": dataTestId = "Button",
  ...props
}: ButtonProps) {
  const style = [className, styles[variant], styles[size]];

  return (
    <button
      type={type}
      disabled={disabled}
      data-testid={dataTestId}
      className={classNames(
        styles.button,
        { [styles.disabled]: disabled },
        style,
      )}
      {...props}
    />
  );
});
