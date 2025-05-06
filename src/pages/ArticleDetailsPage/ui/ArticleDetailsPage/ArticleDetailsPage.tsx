import { ArticleDetails } from "@/entities/Article";
import { Counter } from "@/entities/Counter";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecomendationsList } from "@/features/ArticleRecomendationsList";
import { toggleFeature } from "@/shared/lib/features";
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

  if (!id) {
    return (
      <Text title={t("Статья не найдена")} variant="error" align="center" />
    );
  }

  const counter = toggleFeature({
    name: "isCounterEnabled",
    on: () => <Counter />,
    off: () => null,
  });

  const rating = toggleFeature({
    name: "isArticleRatingEnabled",
    on: () => <ArticleRating articleId={id} />,
    off: () => null,
  });

  return (
    <Page>
      <VStack gap={32}>
        <AritcleDetailsHeader articleId={id} />
        <ArticleDetails id={id} />
        {counter}
        {rating}
        <ArticleRecomendationsList />
        <ArticleDetailsComments articleId={id} />
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
