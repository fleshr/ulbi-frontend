import EyeIcon from "@/shared/assets/icons/eye.svg";
import { RoutePath } from "@/shared/config";
import { classNames } from "@/shared/lib";
import { AppLink, Avatar, Text } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Article, ArticleBlockType } from "../../model/types";
import styles from "./ArticleListItem.module.scss";

interface ArticleListItemProps {
  className?: string;
  view?: "big" | "small";
  article: Article;
}

export const ArticleListItem = memo(function ArticleListItem({
  className,
  view = "small",
  article: { id, title, img, views, createdAt, user, type, blocks },
}: ArticleListItemProps) {
  const { t } = useTranslation("translation", { keyPrefix: "ArticleListItem" });

  if (view === "big") {
    const firstParagraph = blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    )?.paragraphs[0];

    return (
      <div className={classNames(styles.article, {}, [className, styles.big])}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.user}>
              <Avatar size={20} src={user.avatar} />
              <Text text={user.username} />
            </div>
            <Text text={createdAt} />
          </div>
          <Text className={styles.title} title={title} />
          <Text className={styles.tags} text={type.join(", ")} />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt={title} />
        </div>
        <div className={styles.content}>
          {firstParagraph && <Text text={firstParagraph} />}
          <AppLink
            to={`${RoutePath.articles}/${id}`}
            className={styles.button}
            variant="outline"
          >
            {t("Читать далее")}
          </AppLink>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`${RoutePath.articles}/${id}`}
      className={classNames(styles.article, {}, [className, styles.small])}
    >
      <div className={styles.imgWrapper}>
        <Text className={styles.date} text={createdAt} />
        <img className={styles.img} src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <Text className={styles.tags} text={type.join(", ")} />
          <div className={styles.views}>
            <Text text={String(views)} />
            <EyeIcon />
          </div>
        </div>
        <Text className={styles.title} title={title} />
      </div>
    </Link>
  );
});
