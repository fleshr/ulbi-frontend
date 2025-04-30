import CalendarIcon from "@/shared/assets/icons/calendar.svg";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Avatar, HStack, Skeleton, Text, VStack } from "@/shared/ui";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArticleBlock } from "../../constants/articleBlock";
import { fetchArticleDetails } from "../../model/services/fetchArticleDetails";
import { articleDetailsSelectors } from "../../model/slices/articleDetailsSlice";
import type { ArticleBlock as ArticleBlockType } from "../../model/types/articleBlock";
import { ArticleCodeBlock } from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleImageBlock } from "../ArticleImageBlock/ArticleImageBlock";
import { ArticleTextBlock } from "../ArticleTextBlock/ArticleTextBlock";
import styles from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  id: string;
}

export const ArticleDetails = memo(function ArticleDetails({
  id,
}: ArticleDetailsProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation", { keyPrefix: "ArticleDetails" });
  const article = useAppSelector(articleDetailsSelectors.getData);
  const isLoading = useAppSelector(articleDetailsSelectors.getIsLoading);
  const error = useAppSelector(articleDetailsSelectors.getError);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
      case ArticleBlock.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      case ArticleBlock.CODE:
        return (
          <ArticleCodeBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      case ArticleBlock.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      void dispatch(fetchArticleDetails(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={150} radius="50%" />
        <Skeleton className={styles.line} width={300} height={30} />
        <Skeleton className={styles.line} height={100} />
        <Skeleton className={styles.line} height={100} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        variant="error"
        align="center"
        title={t("Произошла ошибка при загрузке статьи.")}
      />
    );
  } else {
    content = (
      <div>
        <Avatar className={styles.avatar} size={150} src={article?.img} />
        <VStack gap={16}>
          <Text size="lg" title={article?.title} text={article?.subtitle} />
          <VStack>
            <HStack gap={8}>
              <EyeIcon />
              <Text text={String(article?.views)} />
            </HStack>
            <HStack gap={8}>
              <CalendarIcon />
              <Text text={article?.createdAt} />
            </HStack>
          </VStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </div>
    );
  }

  return <div>{content}</div>;
});
