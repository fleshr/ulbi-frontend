import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

export const MainPage: FC = memo(function MainPage() {
  const { t } = useTranslation("mainPage");

  return <div>{t("Главная страница")}</div>;
});

export default MainPage;
