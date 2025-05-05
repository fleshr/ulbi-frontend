import { ArticleDetails } from "@/entities/Article";
import { Counter } from "@/entities/Counter";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecomendationsList } from "@/features/ArticleRecomendationsList";
import { getFeatureFlag } from "@/shared/lib";
import { Text, VStack } from "@/shared/ui";
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
  const isArticleRatingEnabled = getFeatureFlag("isArticleRatingEnabled");
  const isCounterEnabled = getFeatureFlag("isCounterEnabled");

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
        {isCounterEnabled && <Counter />}
        {isArticleRatingEnabled && <ArticleRating articleId={id} />}
        <ArticleRecomendationsList />
        <ArticleDetailsComments articleId={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
