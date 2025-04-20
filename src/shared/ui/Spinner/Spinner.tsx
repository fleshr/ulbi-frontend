import { memo } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  className?: string;
}

export const Spinner = memo(function Spinner({ className }: SpinnerProps) {
  return <div className={classNames(styles.loader, {}, [className])} />;
});
