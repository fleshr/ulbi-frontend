import { FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./LangSwitcher.module.scss";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation("translation");

  const changeLanguage = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={changeLanguage}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
