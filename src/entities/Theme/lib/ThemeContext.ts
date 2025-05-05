import { createContext } from "react";
import { Theme } from "../model/types";

interface ThemeContextType {
  theme: Theme;
  toogleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
