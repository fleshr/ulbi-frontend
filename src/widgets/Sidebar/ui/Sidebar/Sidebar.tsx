import { FC, useState } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Sidebar.module.scss";
import { Button, LangSwitcher, ThemeSwitcher } from "@/shared/ui";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="Sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.content}></div>
      <div className={styles.switchers}>
        <Button data-testid="Sidebar.Toggle" onClick={toggleCollapsed}>
          TOOGLE
        </Button>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
