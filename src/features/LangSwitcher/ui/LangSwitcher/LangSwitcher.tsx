import { Button } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(function LangSwitcher({
  className,
  short = false,
}: LangSwitcherProps) {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "LangSwitcher",
  });

  const changeLanguage = () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const lang = short ? t("Язык").slice(0, 2) : t("Язык");

  return (
    <Button onClick={changeLanguage} className={className}>
      {lang}
    </Button>
  );
});
