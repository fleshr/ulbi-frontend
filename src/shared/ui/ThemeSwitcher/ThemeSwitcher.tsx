import { memo } from "react";
import { classNames } from "@/shared/lib";
import styles from "./ThemeSwitcher.module.scss";
import { Button } from "../Button/Button";
import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeDarkIcon from "../../assets/icons/theme-dark.svg";
import ThemeLighIcon from "../../assets/icons/theme-light.svg";
import { Theme } from "@/app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps) {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      onClick={toogleTheme}
      className={classNames(styles.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <ThemeLighIcon /> : <ThemeDarkIcon />}
    </Button>
  );
});
