import type { User } from "@/entities/User";
import type { ArticleType } from "../../constants/articleType";
import type { ArticleBlock } from "./articleBlock";

export type ArticleView = "small" | "big";
export type ArticleSortField = "views" | "title" | "createdAt";
export type ArticleOrder = "asc" | "desc";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}

export interface ArticleState {
  data?: Article;
  isLoading: boolean;
  error?: string;
}
