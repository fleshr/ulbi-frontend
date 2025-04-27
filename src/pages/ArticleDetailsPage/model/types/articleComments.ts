import { Comment } from "@/entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleCommentsState extends EntityState<Comment, string> {
  isLoading: boolean;
  error?: string;
}
