import { classNames } from "@/shared/lib";
import type { DataTestId } from "@/shared/types";
import type { ChangeEvent, InputHTMLAttributes } from "react";
import { memo, useCallback, useId } from "react";
import { HStack } from "../Flex";
import styles from "./Input.module.scss";

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement> & DataTestId,
    "onChange" | "value"
  > {
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
  readOnly = false,
  disabled = false,
  "data-testid": dataTestId = "Input",
  ...props
}: InputProps) {
  const id = useId();

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  return (
    <HStack gap={8} fullWidth>
      {label && (
        <label data-testid={`${dataTestId}.Label`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        data-testid={`${dataTestId}.Input`}
        id={id}
        disabled={disabled}
        value={value}
        onChange={handleInputChange}
        className={classNames(
          styles.input,
          { [styles.disabled]: disabled, [styles.readOnly]: readOnly },
          [className],
        )}
        {...props}
      />
    </HStack>
  );
});
