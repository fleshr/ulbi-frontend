import { classNames } from "@/shared/lib";
import { Text } from "@/shared/ui";
import { memo } from "react";
import type { ArticleTextBlock as ArticleTextBlockType } from "../../model/types/articleBlock";
import styles from "./ArticleTextBlock.module.scss";

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock = memo(function ArticleTextBlock({
  className,
  block: { title, paragraphs },
}: ArticleTextBlockProps) {
  return (
    <div className={classNames("", {}, [className])}>
      <Text title={title} />
      {paragraphs.map((paragraph) => (
        <Text className={styles.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  );
});
