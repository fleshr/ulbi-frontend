import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const AboutPage: FC = memo(function AboutPage() {
  const { t } = useTranslation("aboutPage");

  return <div>{t("О нас")}</div>;
});

export default AboutPage;
