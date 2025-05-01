import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
  type PopoverPanelProps,
} from "@headlessui/react";
import { memo, type ReactNode } from "react";
import styles from "./Popover.module.scss";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  anchor?: PopoverPanelProps["anchor"];
}

export const Popover = memo(function Popover({
  className,
  trigger,
  children,
  anchor = "bottom start",
}: PopoverProps) {
  return (
    <HPopover className={className}>
      <PopoverButton className={styles.trigger}>{trigger}</PopoverButton>
      <PopoverPanel className={styles.panel} anchor={anchor}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
});
