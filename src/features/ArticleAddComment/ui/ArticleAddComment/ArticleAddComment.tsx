import { CommentForm } from "@/entities/Comment";
import { userSelectors } from "@/entities/User";
import { useAppSelector } from "@/shared/model";
import { memo, useCallback } from "react";
import { useAddCommentMutation } from "../../api/addArticleComment";

interface ArticleAddCommentProps {
  articleId: string;
}

export const ArticleAddComment = memo(function ArticleAddComment({
  articleId,
}: ArticleAddCommentProps) {
  const user = useAppSelector(userSelectors.getUserData);
  const [addComment] = useAddCommentMutation();

  const handleCommentSend = useCallback(
    (text: string) => {
      void addComment({ articleId, text, userId: user?.id ?? "" });
    },
    [addComment, articleId, user?.id],
  );

  return <CommentForm onCommentSend={handleCommentSend} />;
});
