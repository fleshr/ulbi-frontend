import {
  Field,
  Listbox as HListbox,
  Label,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Fragment, memo } from "react";
import { Button } from "../Button/Button";
import { HStack } from "../Flex";
import styles from "./Listbox.module.scss";

export interface ListboxItem<T extends string = string> {
  value: T;
  label: string;
}

interface ListboxProps<T extends string = string> {
  selected: ListboxItem<T>;
  options: ListboxItem<T>[];
  onChange: (value: ListboxItem<T>) => void;
  className?: string;
  readonly?: boolean;
  label?: string;
}

export const Listbox = memo(function Listbox<T extends string = string>({
  className,
  readonly = false,
  label,
  selected,
  onChange,
  options,
}: ListboxProps<T>) {
  return (
    <Field className={className} disabled={readonly} as={HStack} gap={8}>
      {label && <Label>{label}</Label>}
      <HListbox value={selected} by="value" onChange={onChange}>
        <ListboxButton as={Button} variant="filled">
          {selected.label}
        </ListboxButton>
        <ListboxOptions anchor="bottom start" className={styles.options}>
          {options.map(({ value, label }) => (
            <ListboxOption key={value} value={value} as={Fragment}>
              {({ selected }) => (
                <div className={styles.item}>
                  {selected && "!"}
                  {label}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListbox>
    </Field>
  );
});
