import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: FC = memo(function NotFoundPage() {
  const { t } = useTranslation("notFoundPage");

  return <div className={styles.notFoundPage}>{t("Страница не найдена")}</div>;
});

export default NotFoundPage;
