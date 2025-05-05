import { ArticleAddComment } from "@/features/ArticleAddComment";
import { Text, VStack } from "@/shared/ui";
import { ArticleCommentsList } from "@/widgets/ArticleCommentsList";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface ArticleDetailsCommentsProps {
  articleId: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments({
  articleId,
}: ArticleDetailsCommentsProps) {
  const { t } = useTranslation("articleDetailsPage");

  return (
    <VStack gap={8}>
      <Text title={t("Комментарии")} />
      <ArticleAddComment articleId={articleId} />
      <ArticleCommentsList articleId={articleId} />
    </VStack>
  );
});
