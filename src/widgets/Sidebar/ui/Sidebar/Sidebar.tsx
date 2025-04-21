import { userSelectors } from "@/entities/User";
import { classNames } from "@/shared/lib";
import { useAppSelector } from "@/shared/model";
import { Button, LangSwitcher, ThemeSwitcher } from "@/shared/ui";
import { memo, useCallback, useMemo, useState } from "react";
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
  const user = useAppSelector(userSelectors.getUserData);

  const sidebarItems = useMemo(() => {
    return sidebarItemsList
      .filter((item) => !item.authOnly || user)
      .map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      ));
  }, [collapsed, user]);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="Sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={styles.content}>{sidebarItems}</div>
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
