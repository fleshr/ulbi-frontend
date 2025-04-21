import { ArticleDetails } from "@/entities/Article";
import { CommentsList } from "@/entities/Comment";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text } from "@/shared/ui";
import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  getArticleComments,
  getIsLoading,
} from "../../model/articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId";

export const ArticleDetailsPage: FC = memo(function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("articleDetailsPage");
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      void dispatch(fetchCommentsByArticleId(id));
    }
  }, [dispatch, id]);

  if (!id) {
    return (
      <Text title={t("Статья не найдена")} variant="error" align="center" />
    );
  }

  return (
    <div>
      <ArticleDetails id={id} />
      <CommentsList comments={comments} isLoading={isLoading} />
    </div>
  );
});

export default ArticleDetailsPage;
