import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation("mainPage");

  return <div>{t("Главная страница")}</div>;
};

export default MainPage;
