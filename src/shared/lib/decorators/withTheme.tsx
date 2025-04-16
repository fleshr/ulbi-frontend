import { Decorator } from "@storybook/react";
import "@/app/styles/index.scss";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export const withTheme: Decorator = (Story) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
