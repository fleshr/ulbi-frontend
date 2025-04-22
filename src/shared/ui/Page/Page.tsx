import { classNames } from "@/shared/lib";
import { useInfiniteScroll } from "@/shared/lib/hooks";
import { FC, PropsWithChildren, useRef } from "react";
import styles from "./Page.module.scss";

interface PageProps extends PropsWithChildren {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    callback: () => onScrollEnd?.(),
    root: rootRef.current,
    target: targetRef.current,
  });

  return (
    <div ref={rootRef} className={classNames(styles.page, {}, [className])}>
      {children}
      <div ref={targetRef} />
    </div>
  );
};
