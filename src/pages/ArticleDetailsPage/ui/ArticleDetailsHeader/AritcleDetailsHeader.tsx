import { RoutePath } from "@/shared/config";
import { classNames } from "@/shared/lib";
import { useAppSelector } from "@/shared/model";
import { AppLink } from "@/shared/ui";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { getCanEditArticle } from "../../model/selectors/article";
import styles from "./AritcleDetailsHeader.module.scss";

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
    <div className={classNames(styles.header, {}, [className])}>
      <AppLink to={RoutePath.articles} variant="outline">
        {t("Назад к статьям")}
      </AppLink>
      {canEdit && (
        <AppLink
          to={RoutePath.article_edit.replace(":id", articleId)}
          variant="outline"
        >
          {t("Редактировать статью")}
        </AppLink>
      )}
    </div>
  );
});
