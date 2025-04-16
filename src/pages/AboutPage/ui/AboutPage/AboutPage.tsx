import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation("aboutPage");

  return <div>{t("О нас")}</div>;
};

export default AboutPage;
