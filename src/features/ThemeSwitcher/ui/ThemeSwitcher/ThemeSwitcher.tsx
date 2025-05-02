import { useTheme } from "@/app/providers";
import ThemeDarkIcon from "@/shared/assets/icons/theme-dark.svg";
import ThemeLighIcon from "@/shared/assets/icons/theme-light.svg";
import { classNames } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { memo } from "react";
import styles from "./ThemeSwitcher.module.scss";

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
      {theme === "dark" ? <ThemeLighIcon /> : <ThemeDarkIcon />}
    </Button>
  );
});
