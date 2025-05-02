import { ThemeProvider } from "@/app/providers";
import type { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
