import { Tabs, type TabItem } from "@/shared/ui";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleType } from "../../constants/articleType";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs({
  className,
  value,
  onChangeType,
}: ArticleTypeTabsProps) {
  const { t } = useTranslation("translation", { keyPrefix: "ArticleTypeTabs" });

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("Все статьи"),
      },
      {
        value: ArticleType.IT,
        content: t("Айти"),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("Экономика"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Наука"),
      },
    ],
    [t],
  );

  return (
    <div className={className}>
      <Tabs tabs={typeTabs} selected={value} onTabChange={onChangeType} />
    </div>
  );
});
