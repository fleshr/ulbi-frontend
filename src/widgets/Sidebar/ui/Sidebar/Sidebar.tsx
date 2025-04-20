import { classNames } from "@/shared/lib";
import { Button, LangSwitcher, ThemeSwitcher } from "@/shared/ui";
import { memo, useState } from "react";
import { sidebarItemsList } from "../../constants/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
  defaultCollapsed?: boolean;
}

export const Sidebar = memo(function Sidebar({
  className,
  defaultCollapsed = false,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="Sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.content}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <Button
          data-testid="Sidebar.Toggle"
          className={styles.collapseBtn}
          variant="filled"
          onClick={toggleCollapsed}
        >
          {collapsed ? ">" : "<"}
        </Button>
        <LangSwitcher short={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  );
});
