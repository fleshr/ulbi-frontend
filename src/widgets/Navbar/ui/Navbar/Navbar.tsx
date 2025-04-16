import { classNames } from "@/shared/lib";
import { FC } from "react";
import styles from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation("common", { keyPrefix: "Navbar" });

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div></div>
      <div className={styles.links}>
        <AppLink to="/">{t("Главная")}</AppLink>
        <AppLink to="/about">{t("О нас")}</AppLink>
      </div>
    </div>
  );
};
