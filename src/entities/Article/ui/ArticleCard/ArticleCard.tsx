import EyeIcon from "@/shared/assets/icons/eye.svg";
import { RoutePath } from "@/shared/constants";
import { classNames } from "@/shared/lib";
import { AppLink, Avatar, HStack, Skeleton, Text, VStack } from "@/shared/ui";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import type { HTMLAttributeAnchorTarget } from "react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleBlock } from "../../constants/articleBlock";
import type { Article, ArticleView } from "../../model/types/article";
import styles from "./ArticleCard.module.scss";

interface ArticleCardProps {
  className?: string;
  view?: ArticleView;
  article: Article;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleCard = memo(function ArticleCard({
  className,
  view = "small",
  article: { id, title, img, views, createdAt, user, type, blocks },
  target = "_self",
}: ArticleCardProps) {
  const { t } = useTranslation("translation", { keyPrefix: "ArticleCard" });
  const fallback = <Skeleton height={200} />;

  if (view === "big") {
    const firstParagraph = blocks.find(
      (block) => block.type === ArticleBlock.TEXT,
    )?.paragraphs[0];

    return (
      <div
        data-testid="ArticleCard"
        className={classNames(styles.article, {}, [className, styles.big])}
      >
        <div className={styles.header}>
          <HStack justify="between">
            <HStack gap={4}>
              <Avatar size={20} src={user.avatar} />
              <Text text={user.username} />
            </HStack>
            <Text text={createdAt} />
          </HStack>
          <Text className={styles.title} title={title} />
          <Text className={styles.tags} text={type.join(", ")} />
        </div>
        <div className={styles.imgWrapper}>
          <AppImage
            fallback={fallback}
            className={styles.img}
            src={img}
            alt={title}
          />
        </div>
        <VStack gap={8} className={styles.content}>
          {firstParagraph && <Text text={firstParagraph} />}
          <AppLink
            target={target}
            to={RoutePath.getArticleRoute(id)}
            className={styles.button}
            variant="outline"
          >
            {t("Читать далее")}
          </AppLink>
        </VStack>
      </div>
    );
  }

  return (
    <AppLink
      data-testid="ArticleCard"
      target={target}
      to={RoutePath.getArticleRoute(id)}
      className={classNames(styles.article, {}, [className, styles.small])}
    >
      <div className={styles.imgWrapper}>
        <Text className={styles.date} text={createdAt} />
        <AppImage
          fallback={fallback}
          className={styles.img}
          src={img}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <HStack gap={32}>
          <Text className={styles.tags} text={type.join(", ")} />
          <HStack gap={4} className={styles.views}>
            <Text text={String(views)} />
            <EyeIcon />
          </HStack>
        </HStack>
        <Text className={styles.title} title={title} />
      </div>
    </AppLink>
  );
});
