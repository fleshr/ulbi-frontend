import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ArticleEditPage: FC = memo(function ArticleEditPage() {
  const { t } = useTranslation("articleEditPage");
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page>{isEdit ? t("Редактирование статьи") : t("Создание статьи")}</Page>
  );
});

export default ArticleEditPage;
