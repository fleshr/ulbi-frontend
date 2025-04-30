import { Code } from "@/shared/ui";
import { memo } from "react";
import type { ArticleCodeBlock as ArticleCodeBlockType } from "../../model/types/articleBlock";

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock = memo(function ArticleCodeBlock({
  className,
  block: { code },
}: ArticleCodeBlockProps) {
  return <Code className={className} text={code} />;
});
