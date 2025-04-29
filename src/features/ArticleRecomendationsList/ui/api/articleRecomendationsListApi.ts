import { Article } from "@/entities/Article";
import { rtkApi } from "@/shared/api";

const articleRecomendationsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomendations: build.query<Article[], number>({
      query: (limit) => ({
        url: "articles",
        params: { _limit: limit },
      }),
    }),
  }),
});

export const useGetArticleRecomendationsQuery =
  articleRecomendationsListApi.useGetArticleRecomendationsQuery;
