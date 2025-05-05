// eslint-disable-next-line myPlugin/layers-import
import { ThemeProvider } from "@/entities/Theme";
import type { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
