import { RatingCard } from "@/entities/Rating";
import { userSelectors } from "@/entities/User";
import { useAppSelector } from "@/shared/model";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  useGetArticleRatingQuery,
  useSetArticleRatingMutation,
} from "../../api/articleRating";

interface ArticleRatingProps {
  articleId: string;
}

export const ArticleRating = memo(function ArticleRating({
  articleId,
}: ArticleRatingProps) {
  const { t } = useTranslation("articleDetailsPage", {
    keyPrefix: "ArticleRating",
  });
  const user = useAppSelector(userSelectors.getUserData);
  const { data: rating } = useGetArticleRatingQuery({
    userId: user?.id ?? "",
    articleId,
  });
  const [setArticleRating] = useSetArticleRatingMutation();

  const handleSetArticleRating = useCallback(
    (rating: number, feedback?: string) => {
      void setArticleRating({
        userId: user?.id ?? "",
        articleId,
        rating,
        feedback,
      });
    },
    [articleId, setArticleRating, user?.id],
  );

  if (!rating) {
    return null;
  }

  return (
    <RatingCard
      hasFeedback
      title={t("Оцените статью")}
      feedbackTitle={t("Напишите отзыв")}
      defaultRating={rating[0]?.rating}
      onAccept={handleSetArticleRating}
      onCancel={handleSetArticleRating}
    />
  );
});
