import { useCallback, useRef } from "react";

export const useThrottle = <T>(callback: (...args: T[]) => void) => {
  const ref = useRef(false);

  return useCallback(
    (...args: T[]) => {
      if (ref.current) {
        return;
      }

      callback(...args);
      ref.current = true;
      setTimeout(() => {
        ref.current = false;
      }, 500);
    },
    [callback],
  );
};
