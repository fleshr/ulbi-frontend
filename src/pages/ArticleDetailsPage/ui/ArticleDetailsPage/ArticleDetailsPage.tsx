import { ArticleDetails } from "@/entities/Article";
import { CommentsList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddCommentForm";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text } from "@/shared/ui";
import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  getArticleComments,
  getIsLoading,
} from "../../model/articleDetailsCommentsSlice";
import { addCommentForArticle } from "../../services/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId";
import styles from "./ArticleDetailsPage.module.scss";

export const ArticleDetailsPage: FC = memo(function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
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
    <div className={styles.articleDetails}>
      <ArticleDetails id={id} />
      <div className={styles.comments}>
        <Text title={t("Комментарии")} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentsList comments={comments} isLoading={isLoading} />
      </div>
    </div>
  );
});

export default ArticleDetailsPage;
