import { Text, VStack } from "@/shared/ui";
import { memo } from "react";
import type { ArticleImageBlock as ArticleImageBlockType } from "../../model/types/articleBlock";
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
    <VStack gap={4} align="center" className={className}>
      <img className={styles.img} src={src} alt={title} />
      <Text text={title} align="center" />
    </VStack>
  );
});
