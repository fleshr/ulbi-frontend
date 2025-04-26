import { classNames } from "@/shared/lib";
import { Select, SelectOption } from "@/shared/ui";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ArticleOrder, ArticleSortField } from "../../model/types";
import styles from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: ArticleOrder;
  onChangeOrder: (newOrder: ArticleOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) {
  const { t } = useTranslation("translation", {
    keyPrefix: "ArticleSortSelector",
  });

  const sortOptions: SelectOption<ArticleSortField>[] = useMemo(() => {
    return [
      {
        value: "views",
        label: t("Просмотрам"),
      },
      {
        value: "title",
        label: t("Названию"),
      },
      {
        value: "createdAt",
        label: t("Дате"),
      },
    ];
  }, [t]);

  const orderOptions: SelectOption<ArticleOrder>[] = useMemo(() => {
    return [
      {
        value: "asc",
        label: t("возрастанию"),
      },
      {
        value: "desc",
        label: t("убыванию"),
      },
    ];
  }, [t]);

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Select
        label={t("Сортировать по")}
        options={sortOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t("по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
