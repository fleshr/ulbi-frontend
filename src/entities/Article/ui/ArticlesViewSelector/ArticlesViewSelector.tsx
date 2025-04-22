import ListIcon from "@/shared/assets/icons/list.svg";
import TiledIcon from "@/shared/assets/icons/tiled.svg";
import { classNames } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { memo, useCallback } from "react";
import { ArticleView } from "../../model/types";
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
    <div className={classNames(styles.selector, {}, [className])}>
      <Button
        onClick={handleViewChange("small")}
        className={classNames(
          styles.button,
          { [styles.selected]: view === "small" },
          [],
        )}
        variant="outline"
      >
        <TiledIcon />
      </Button>
      <Button
        onClick={handleViewChange("big")}
        className={classNames(
          styles.button,
          { [styles.selected]: view === "big" },
          [],
        )}
        variant="outline"
      >
        <ListIcon />
      </Button>
    </div>
  );
});
