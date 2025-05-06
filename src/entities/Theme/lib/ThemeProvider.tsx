import { userSelectors } from "@/entities/User";
import { useAppSelector } from "@/shared/model";
import type { FC, ReactNode } from "react";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import type { Theme, ToggleCallback } from "../model/types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: userTheme = initialTheme ?? "light" } = useAppSelector(
    userSelectors.getJsonSettings,
  );
  const [theme, setTheme] = useState(userTheme);

  useLayoutEffect(() => {
    setTheme(userTheme);
  }, [userTheme]);

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = useCallback(
    (callback?: ToggleCallback) => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      callback?.(newTheme);
    },
    [theme],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
