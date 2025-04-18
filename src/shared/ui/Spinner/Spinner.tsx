import { FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return <div className={classNames(styles.loader, {}, [className])} />;
};
