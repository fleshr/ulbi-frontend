import ListIcon from "@/shared/assets/icons/list.svg";
import TiledIcon from "@/shared/assets/icons/tiled.svg";
import { classNames } from "@/shared/lib";
import { Button, HStack } from "@/shared/ui";
import { memo, useCallback } from "react";
import type { ArticleView } from "../../model/types/article";
import styles from "./ArticlesViewSelector.module.scss";

interface ArticlesViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onChange?: (view: ArticleView) => void;
}

export const ArticlesViewSelector = memo(function ArticlesViewSelector({
  className,
  view = "small",
  onChange,
}: ArticlesViewSelectorProps) {
  const handleViewChange = useCallback(
    (view: ArticleView) => () => {
      onChange?.(view);
    },
    [onChange],
  );

  return (
    <HStack gap={4} className={className}>
      <Button
        onClick={handleViewChange("small")}
        className={classNames("", { [styles.selected]: view === "small" }, [])}
        variant="outline"
      >
        <HStack justify="center">
          <TiledIcon />
        </HStack>
      </Button>
      <Button
        onClick={handleViewChange("big")}
        className={classNames("", { [styles.selected]: view === "big" }, [])}
        variant="outline"
      >
        <HStack justify="center">
          <ListIcon />
        </HStack>
      </Button>
    </HStack>
  );
});
