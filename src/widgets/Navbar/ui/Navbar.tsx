import { classNames } from "@/shared/lib";
import { FC } from "react";
import styles from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div>Navbar</div>
      <div className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
