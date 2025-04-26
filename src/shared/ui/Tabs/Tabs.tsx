import { classNames } from "@/shared/lib";
import { ReactNode } from "react";
import styles from "./Tabs.module.scss";

export interface TabItem<T extends string = string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string = string> {
  className?: string;
  tabs: TabItem<T>[];
  selected: T;
  onTabChange: (tab: T) => void;
}

export const Tabs = function Tabs<T extends string = string>({
  className,
  tabs,
  selected,
  onTabChange,
}: TabsProps<T>) {
  const handleTabChange = (value: T) => () => {
    onTabChange(value);
  };

  return (
    <div className={classNames(styles.tabs, {}, [className])}>
      {tabs.map(({ value, content }) => (
        <div
          key={value}
          className={classNames(
            styles.tab,
            {
              [styles.selected]: value === selected,
            },
            [],
          )}
          onClick={handleTabChange(value)}
        >
          {content}
        </div>
      ))}
    </div>
  );
};
