import { FC } from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => {
  return (
    <div className={styles.PageLoader}>
      <Spinner />
    </div>
  );
};
