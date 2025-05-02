import { classNames } from "@/shared/lib";
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components";
import { memo, useCallback, useEffect, type ReactNode } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import styles from "./Drawer.module.scss";

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - window.innerHeight / 2;

export const DrawerContent = memo(function Drawer({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps) {
  const { spring, gesture } = useAnimationLibs();

  const Sheet = spring.animated("div");
  const [{ y }, api] = spring.useSpring(() => ({ y: height }));
  const display = y.to((py) => (py < height ? "block" : "none"));

  const open = useCallback(() => {
    void api.start({ y: 0, immediate: false });
  }, [api]);

  const close = (velocity = 0) => {
    void api.start({
      y: height,
      immediate: false,
      config: { ...spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      if (oy < -70) {
        cancel();
      }

      if (last) {
        if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy);
        } else {
          open();
        }
      } else {
        void api.start({ y: oy, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [open, isOpen, api]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.drawer, {}, [className])}>
        <Overlay onClick={close} />
        <Sheet
          className={styles.sheet}
          style={{
            display,
            bottom: `calc(-100vh + ${String(height - 100)}px)`,
            y,
          }}
          {...bind()}
        >
          {children}
        </Sheet>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoading } = useAnimationLibs();

  if (isLoading) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
