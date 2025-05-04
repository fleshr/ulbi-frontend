import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const MainPage: FC = memo(function MainPage() {
  const { t } = useTranslation("mainPage");

  return <Page data-testid="MainPage">{t("Главная страница")}</Page>;
});

export default MainPage;
