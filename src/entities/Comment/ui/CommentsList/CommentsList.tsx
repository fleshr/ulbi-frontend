import { Text, VStack } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Comment as CommentType } from "../../model/types";
import { Comment } from "../Comment/Comment";

interface CommentsListProps {
  className?: string;
  isLoading?: boolean;
  comments: CommentType[];
}

export const CommentsList = memo(function CommentsList({
  className,
  comments,
  isLoading = false,
}: CommentsListProps) {
  const { t } = useTranslation("translation", { keyPrefix: "CommentsList" });

  return (
    <VStack gap={16} className={className}>
      {comments.length ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <Text align="center" text={t("Комментарии отсутствуют")} />
      )}
    </VStack>
  );
});
