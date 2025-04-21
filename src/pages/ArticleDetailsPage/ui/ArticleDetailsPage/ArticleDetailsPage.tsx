import { ArticleDetails } from "@/entities/Article";
import { Text } from "@/shared/ui";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ArticleDetailsPage: FC = memo(function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("articleDetailsPage");

  if (!id) {
    return (
      <Text title={t("Статья не найдена")} variant="error" align="center" />
    );
  }

  return <ArticleDetails id={id} />;
});

export default ArticleDetailsPage;
