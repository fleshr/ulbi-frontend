import { classNames } from "@/shared/lib";
import { FC } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div></div>
      <div className={styles.links}></div>
    </div>
  );
};
