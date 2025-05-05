import { LOCAL_STORAGE_THEME_KEY } from "../const/themeLocalStorageKey";
import { Theme } from "../model/types";

export const getLocalStorageTheme = (): Theme => {
  const value = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
  return ["dark", "light"].includes(value) ? value : "light";
};
