import { classNames } from "@/shared/lib";
import {
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from "@/shared/lib/hooks";
import { FC, PropsWithChildren, UIEventHandler, useRef } from "react";
import styles from "./Page.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import {
  getScrollPositionByPathname,
  scrollRestorationActions,
} from "@/features/ScrollRestoration";
import { useLocation } from "react-router";

interface PageProps extends PropsWithChildren {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
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
    <div
      ref={rootRef}
      onScroll={handlePageScroll}
      className={classNames(styles.page, {}, [className])}
    >
      {children}
      <div ref={targetRef} />
    </div>
  );
};
