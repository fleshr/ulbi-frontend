import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui";
import { memo } from "react";
import { ArticleImageBlock as ArticleImageBlockType } from "../../model/types";
import styles from "./ArticleImageBlock.module.scss";

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockType;
}

export const ArticleImageBlock = memo(function ArticleImageBlock({
  className,
  block: { src, title },
}: ArticleImageBlockProps) {
  return (
    <div className={classNames(styles.block, {}, [className])}>
      <img className={styles.img} src={src} alt={title} />
      <Text text={title} align="center" />
    </div>
  );
});
