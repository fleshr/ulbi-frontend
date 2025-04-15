import { FC, useState } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Sidebar.module.scss";
import { Button, ThemeSwitcher } from "@/shared/ui";

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.content}>Sidebar</div>
      <div className={styles.switchers}>
        <Button onClick={toggleCollapsed}>TOOGLE</Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
