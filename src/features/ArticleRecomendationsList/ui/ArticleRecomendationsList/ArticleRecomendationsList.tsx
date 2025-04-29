import { ArticlesList } from "@/entities/Article";
import { memo } from "react";
import { useGetArticleRecomendationsQuery } from "../api/articleRecomendationsListApi";

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = memo(
  function ArticleRecomendationsList({
    className,
  }: ArticleRecomendationsListProps) {
    const { data: articles } = useGetArticleRecomendationsQuery(3);

    if (!articles) {
      return null;
    }

    return <ArticlesList className={className} articles={articles} />;
  },
);
