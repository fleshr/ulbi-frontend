import type { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api";

interface GetRatingProps {
  userId: string;
  articleId: string;
}

interface SetRating extends GetRatingProps {
  rating: number;
  feedback?: string;
}

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setArticleRating: build.mutation<Rating[], SetRating>({
      query: (args) => ({ url: "article-ratings", method: "POST", body: args }),
    }),
    getArticleRating: build.query<Rating[], GetRatingProps>({
      query: ({ userId, articleId }) => ({
        url: "article-ratings",
        params: { userId, articleId },
      }),
    }),
  }),
});

export const useGetArticleRatingQuery =
  notificationApi.useGetArticleRatingQuery;
export const useSetArticleRatingMutation =
  notificationApi.useSetArticleRatingMutation;
