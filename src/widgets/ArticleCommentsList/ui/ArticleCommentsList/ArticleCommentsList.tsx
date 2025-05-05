import { CommentsList } from "@/entities/Comment";
import { memo } from "react";
import { useGetCommentsQuery } from "../../api/articleComments";

interface ArticleCommentsListProps {
  articleId: string;
}

export const ArticleCommentsList = memo(function ArticleCommentsList({
  articleId,
}: ArticleCommentsListProps) {
  const { isFetching, data: comments } = useGetCommentsQuery(articleId);

  return <CommentsList isLoading={isFetching} comments={comments} />;
});
