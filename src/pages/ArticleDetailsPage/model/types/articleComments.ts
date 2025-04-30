import type { Comment } from "@/entities/Comment";
import type { EntityState } from "@reduxjs/toolkit";

export interface ArticleCommentsState extends EntityState<Comment, string> {
  isLoading: boolean;
  error?: string;
}
