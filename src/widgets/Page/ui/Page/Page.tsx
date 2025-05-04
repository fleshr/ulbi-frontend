import {
  getScrollPositionByPathname,
  scrollRestorationActions,
} from "@/features/ScrollRestoration";
import { classNames } from "@/shared/lib";
import {
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from "@/shared/lib/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import type { TestProps } from "@/shared/types";
import type { FC, PropsWithChildren, UIEventHandler } from "react";
import { useRef } from "react";
import { useLocation } from "react-router";
import styles from "./Page.module.scss";

interface PageProps extends PropsWithChildren, TestProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({
  className,
  children,
  onScrollEnd,
  "data-testid": dataTestId = "Page",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useAppSelector((state) =>
    getScrollPositionByPathname(state, pathname),
  );

  useInfiniteScroll({
    callback: () => onScrollEnd?.(),
    root: rootRef.current,
    target: targetRef.current,
  });

  useInitialEffect(() => {
    rootRef.current?.scrollTo({ top: scrollPosition });
  });

  const handlePageScroll: UIEventHandler<HTMLDivElement> = useThrottle((e) => {
    dispatch(
      scrollRestorationActions.setScrollPositon({
        path: pathname,
        scroll: e.currentTarget.scrollTop,
      }),
    );
  });

  return (
    <main
      id="PAGE"
      ref={rootRef}
      data-testid={dataTestId}
      onScroll={handlePageScroll}
      className={classNames(styles.page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div ref={targetRef} />}
    </main>
  );
};
