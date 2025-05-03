import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib";
import { useAppSelector } from "@/shared/model";
import { Button, HStack, VStack } from "@/shared/ui";
import { memo, useCallback, useMemo, useState } from "react";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
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
  const sidebarItemsList = useAppSelector(getSidebarItems);

  const sidebarItems = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    ));
  }, [collapsed, sidebarItemsList]);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <VStack
      fullHeight
      data-testid="Sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <VStack gap={8} fullHeight>
        {sidebarItems}
      </VStack>
      <HStack justify="center" gap={8} className={styles.switchers}>
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
      </HStack>
    </VStack>
  );
});
