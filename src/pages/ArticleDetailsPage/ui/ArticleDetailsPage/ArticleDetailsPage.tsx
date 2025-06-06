import { ArticleDetails } from "@/entities/Article";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecomendationsList } from "@/features/ArticleRecomendationsList";
import { ToggleFeature } from "@/shared/lib";
import { Card, Text, VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import type { FC } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { AritcleDetailsHeader } from "../ArticleDetailsHeader/AritcleDetailsHeader";

export const ArticleDetailsPage: FC = memo(function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("articleDetailsPage");

  if (!id) {
    return (
      <Text title={t("Статья не найдена")} variant="error" align="center" />
    );
  }

  return (
    <Page>
      <VStack gap={32}>
        <AritcleDetailsHeader articleId={id} />
        <ArticleDetails id={id} />
        <ToggleFeature
          name="isArticleRatingEnabled"
          on={<ArticleRating articleId={id} />}
          off={<Card>SOON</Card>}
        />
        <ArticleRecomendationsList />
        <ArticleDetailsComments articleId={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
