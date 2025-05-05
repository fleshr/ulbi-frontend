import { Comment } from "@/entities/Comment";
import { rtkApi } from "@/shared/api";

const articleCommentsApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ["Comments"] })
  .injectEndpoints({
    endpoints: (build) => ({
      getComments: build.query<Comment[], string>({
        query: (articleId) => ({
          url: "comments",
          method: "GET",
          params: { articleId, _expand: "user" },
        }),
        providesTags: ["Comments"],
      }),
    }),
  });

export const { useGetCommentsQuery } = articleCommentsApi;
