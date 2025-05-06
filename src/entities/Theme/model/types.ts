export type Theme = "light" | "dark";
export type ToggleCallback = (newTheme: Theme) => void;

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (callback?: ToggleCallback) => void;
}
