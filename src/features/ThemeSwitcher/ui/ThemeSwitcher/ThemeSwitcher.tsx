import { useTheme } from "@/entities/Theme";
import { saveJsonSettings } from "@/entities/User";
import ThemeDarkIcon from "@/shared/assets/icons/theme-dark.svg";
import ThemeLighIcon from "@/shared/assets/icons/theme-light.svg";
import { classNames } from "@/shared/lib";
import { useAppDispatch } from "@/shared/model";
import { Button } from "@/shared/ui";
import { memo, useCallback } from "react";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const handleThemeToggle = useCallback(() => {
    toggleTheme((newTheme) => {
      void dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      onClick={handleThemeToggle}
      className={classNames(styles.themeSwitcher, {}, [className])}
    >
      {theme === "dark" ? <ThemeLighIcon /> : <ThemeDarkIcon />}
    </Button>
  );
});
