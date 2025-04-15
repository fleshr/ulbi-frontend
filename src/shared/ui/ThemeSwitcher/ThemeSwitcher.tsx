import { FC } from "react";
import { classNames } from "@/shared/lib";
import styles from "./ThemeSwitcher.module.scss";
import { Button } from "../Button/Button";
import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeDarkIcon from "../../assets/icons/theme-dark.svg";
import ThemeLighIcon from "../../assets/icons/theme-light.svg";

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      onClick={toogleTheme}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
    >
      {theme === "dark" ? <ThemeLighIcon /> : <ThemeDarkIcon />}
    </Button>
  );
};
