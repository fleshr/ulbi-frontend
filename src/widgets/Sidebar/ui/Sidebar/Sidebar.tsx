import { FC, useState } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Sidebar.module.scss";
import { AppLink, Button, LangSwitcher, ThemeSwitcher } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import MainIcon from "@/shared/assets/icons/main.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

interface SidebarProps {
  className?: string;
  defaultCollapsed?: boolean;
}

export const Sidebar: FC<SidebarProps> = ({
  className,
  defaultCollapsed = false,
}) => {
  const { t } = useTranslation("common", { keyPrefix: "Sidebar" });
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
        <AppLink className={styles.link} to="/">
          <MainIcon />
          <span>{t("Главная")}</span>
        </AppLink>
        <AppLink className={styles.link} to="/about">
          <AboutIcon />
          <span>{t("О нас")}</span>
        </AppLink>
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
};
