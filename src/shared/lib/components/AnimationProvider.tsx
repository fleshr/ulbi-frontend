import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type SpringType = typeof import("@react-spring/web");
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GestureType = typeof import("@use-gesture/react");

interface AnimationState {
  isLoading: boolean;
  spring: SpringType;
  gesture: GestureType;
}

const AnimationContext = createContext<AnimationState | null>(null);

export const useAnimationLibs = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("useAnimationLibs use only in AnimationProvider");
  }

  return context;
};

const getLibs = () => {
  return Promise.all([
    import("@react-spring/web"),
    import("@use-gesture/react"),
  ]);
};

export const AnimationProvider: FC<PropsWithChildren> = ({ children }) => {
  const springRef = useRef<SpringType>(null);
  const gestureRef = useRef<GestureType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void getLibs().then(([spting, gesture]) => {
      springRef.current = spting;
      gestureRef.current = gesture;
      setIsLoading(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      spring: springRef.current!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      gesture: gestureRef.current!,
    }),
    [isLoading],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
