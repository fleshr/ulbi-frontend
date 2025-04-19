import { FC } from "react";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({
  className,
  short = false,
}) => {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const lang = short ? t("Язык").slice(0, 2) : t("Язык");

  return (
    <Button onClick={changeLanguage} className={className}>
      {lang}
    </Button>
  );
};
