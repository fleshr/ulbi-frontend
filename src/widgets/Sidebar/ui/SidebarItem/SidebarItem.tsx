import { classNames } from "@/shared/lib";
import { AppLink, HStack } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../../model/types";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(function SidebarItem({
  item: { path, text, Icon },
  collapsed = false,
}: SidebarItemProps) {
  const { t } = useTranslation("translation", { keyPrefix: "SidebarItem" });

  return (
    <AppLink
      className={classNames(styles.sidebarItem, {
        [styles.collapsed]: collapsed,
      })}
      to={path}
    >
      <HStack gap={8} justify={collapsed ? "center" : undefined}>
        <Icon />
        <span>{t(text)}</span>
      </HStack>
    </AppLink>
  );
});
