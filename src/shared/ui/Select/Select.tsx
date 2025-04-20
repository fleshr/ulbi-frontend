import { classNames } from "@/shared/lib";
import { ChangeEventHandler, memo, useCallback, useId } from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Select = memo(function Select({
  label,
  options,
  value,
  onChange,
  disabled = false,
}: SelectProps) {
  const id = useId();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (e) => onChange?.(e.target.value),
    [onChange],
  );

  return (
    <div className={styles.selectWrapper}>
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
    </div>
  );
});
