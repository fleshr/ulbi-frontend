import { classNames } from "@/shared/lib";
import { ChangeEventHandler, useCallback, useId } from "react";
import { HStack } from "../Flex";
import styles from "./Select.module.scss";

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}

interface SelectProps<T extends string = string> {
  label?: string;
  options: SelectOption<T>[];
  value?: string;
  onChange?: (value: T) => void;
  disabled?: boolean;
}

export const Select = function Select<T extends string = string>({
  label,
  options,
  value,
  onChange,
  disabled = false,
}: SelectProps<T>) {
  const id = useId();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => onChange?.(e.target.value as T),
    [onChange],
  );

  return (
    <HStack gap={8}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        disabled={disabled}
        className={classNames(styles.select, { [styles.disabled]: disabled })}
        value={value}
        onChange={handleChange}
        id={id}
      >
        {options.map(({ label, value }) => (
          <option className={styles.option} key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </HStack>
  );
};
