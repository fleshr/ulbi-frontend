import { createContext } from "react";
import { ThemeContextType } from "../model/types";

export const ThemeContext = createContext<ThemeContextType | null>(null);
