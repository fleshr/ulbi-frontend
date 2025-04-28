import { ArticleDetails, ArticleList } from "@/entities/Article";
import { CommentsList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddCommentForm";
import { useInitialEffect } from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Text, VStack } from "@/shared/ui";
import { Page } from "@/widgets/Page";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { addCommentForArticle } from "../../model/services/addCommentForArticle";
import { fetchArticleRecomendations } from "../../model/services/fetchArticleRecomendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId";
import {
  getArticleComments,
  getIsLoading,
} from "../../model/slices/articleCommentsSlice";
import { getArticleRecomendations } from "../../model/slices/articleDetailsPageSlice";
import { AritcleDetailsHeader } from "../ArticleDetailsHeader/AritcleDetailsHeader";
import styles from "./ArticleDetailsPage.module.scss";

export const ArticleDetailsPage: FC = memo(function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("articleDetailsPage");
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getIsLoading);
  const recomendations = useAppSelector(getArticleRecomendations);

  const handleSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
    void dispatch(fetchArticleRecomendations());
  });

  if (!id) {
    return (
      <Text title={t("Статья не найдена")} variant="error" align="center" />
    );
  }

  return (
    <Page className={styles.articleDetails}>
      <VStack gap={32}>
        <AritcleDetailsHeader articleId={id} />
        <ArticleDetails id={id} />
        <div>
          <ArticleList
            className={styles.recomendations}
            articles={recomendations}
            target="_blank"
          />
        </div>
        <VStack gap={8}>
          <Text title={t("Комментарии")} />
          <AddCommentForm onSendComment={handleSendComment} />
          <CommentsList comments={comments} isLoading={isLoading} />
        </VStack>
      </VStack>
    </Page>
  );
});

export default ArticleDetailsPage;
