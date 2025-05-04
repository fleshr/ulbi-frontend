import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const AboutPage: FC = memo(function AboutPage() {
  const { t } = useTranslation("aboutPage");

  return <Page data-testid="AboutPage">{t("О нас")}</Page>;
});

export default AboutPage;
