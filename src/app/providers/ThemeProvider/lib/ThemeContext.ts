import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toogleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
