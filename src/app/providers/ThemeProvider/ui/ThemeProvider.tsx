import {
  FC,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    return Object.values(Theme).includes(value) ? value : Theme.LIGHT;
  });

  useLayoutEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toogleTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toogleTheme }), [theme, toogleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
