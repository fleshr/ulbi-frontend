import { ChangeEvent, FC, InputHTMLAttributes, useCallback } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Input.module.scss";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Input: FC<InputProps> = ({
  className,
  value = "",
  onChange,
  disabled = false,
  ...props
}) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <input
      disabled={disabled}
      value={value}
      onChange={handleInputChange}
      className={classNames(styles.input, { [styles.disabled]: disabled }, [
        className,
      ])}
      {...props}
    />
  );
};
