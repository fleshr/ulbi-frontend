import { useEffect } from "react";

interface UseInfiniteScrollProps {
  callback: () => void;
  root: HTMLElement | null;
  target: HTMLElement | null;
}

export const useInfiniteScroll = ({
  callback,
  root,
  target,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    if (!target || !root) return;

    const options: IntersectionObserverInit = {
      root,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entity]) => {
      if (entity.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [callback, root, target]);
};
