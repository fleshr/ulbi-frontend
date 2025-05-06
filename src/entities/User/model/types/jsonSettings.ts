import { Theme } from "@/entities/Theme";

export interface JsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpen?: boolean;
}
