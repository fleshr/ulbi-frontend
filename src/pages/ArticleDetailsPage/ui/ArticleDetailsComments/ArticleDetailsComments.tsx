import { CommentsList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddCommentForm";
import { useInitialEffect } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text, VStack } from "@/shared/ui";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import {
  getArticleComments,
  getIsLoading,
} from "../../model/slices/articleCommentsSlice";

interface ArticleDetailsCommentsProps {
  articleId: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments({
  articleId,
}: ArticleDetailsCommentsProps) {
  const { t } = useTranslation("articleDetailsPage");
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getIsLoading);

  const handleSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(articleId));
  });

  return (
    <VStack gap={8}>
      <Text title={t("Комментарии")} />
      <AddCommentForm onSendComment={handleSendComment} />
      <CommentsList comments={comments} isLoading={isLoading} />
    </VStack>
  );
});
