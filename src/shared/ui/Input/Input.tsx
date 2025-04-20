import { classNames } from "@/shared/lib";
import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from "react";
import styles from "./Input.module.scss";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

export const Input = memo(function Input({
  className,
  value = "",
  onChange,
  label,
  disabled = false,
  ...props
}: InputProps) {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <div className={styles.inputWrapper}>
      {label && <span>{label}</span>}
      <input
        disabled={disabled}
        value={value}
        onChange={handleInputChange}
        className={classNames(styles.input, { [styles.disabled]: disabled }, [
          className,
        ])}
        {...props}
      />
    </div>
  );
});
