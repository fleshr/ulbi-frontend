import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextType {
  theme: Theme;
  toogleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
