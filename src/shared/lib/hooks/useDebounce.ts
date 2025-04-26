import { useCallback, useRef } from "react";

export const useDebounce = <T>(
  callback: (...args: T[]) => void,
  delay = 500,
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
