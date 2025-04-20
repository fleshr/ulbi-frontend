import { memo } from "react";
import { Spinner } from "../Spinner/Spinner";
import styles from "./PageLoader.module.scss";

export const PageLoader = memo(function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <Spinner />
    </div>
  );
});
