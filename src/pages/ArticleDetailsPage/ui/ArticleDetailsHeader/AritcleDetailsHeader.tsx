import { RoutePath } from "@/shared/constants";
import { useAppSelector } from "@/shared/model";
import { AppLink, HStack } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { getCanEditArticle } from "../../model/selectors/article";

interface AritcleDetailsHeaderProps {
  className?: string;
  articleId: string;
}

export const AritcleDetailsHeader = memo(function AritcleDetailsHeader({
  className,
  articleId,
}: AritcleDetailsHeaderProps) {
  const canEdit = useAppSelector(getCanEditArticle);
  const { t } = useTranslation("articleDetailsPage", {
    keyPrefix: "AritcleDetailsHeader",
  });

  return (
    <HStack justify="between" className={className}>
      <AppLink to={RoutePath.getArticlesRoute()} variant="outline">
        {t("Назад к статьям")}
      </AppLink>
      {canEdit && (
        <AppLink
          to={RoutePath.getArticleEditRoute(articleId)}
          variant="outline"
        >
          {t("Редактировать статью")}
        </AppLink>
      )}
    </HStack>
  );
});
