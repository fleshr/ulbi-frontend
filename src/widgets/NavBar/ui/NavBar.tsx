import { classNames } from "@/shared/lib";
import { FC } from "react";
import styles from "./NavBar.module.scss";
import { AppLink } from "@/shared/ui";

type NavBarProps = {
  className?: string;
};

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.NavBar, {}, [className])}>
      <div></div>
      <div className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
