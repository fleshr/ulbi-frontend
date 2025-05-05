import { Comment } from "@/entities/Comment";
import { rtkApi } from "@/shared/api";

interface AddCommentProps {
  articleId: string;
  userId: string;
  text: string;
}

const addArticleCommentApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ["Comments"] })
  .injectEndpoints({
    endpoints: (build) => ({
      addComment: build.mutation<Comment, AddCommentProps>({
        query: (args) => ({ url: "comments", method: "POST", body: args }),
        invalidatesTags: ["Comments"],
      }),
    }),
  });

export const { useAddCommentMutation } = addArticleCommentApi;
