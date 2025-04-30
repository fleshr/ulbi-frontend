import type { ArticleBlock as ArticleBlockEnum } from "../../constants/articleBlock";

export interface ArticleBaseBlock {
  id: string;
  type: ArticleBlockEnum;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockEnum.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockEnum.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockEnum.IMAGE;
  src: string;
  title?: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;
