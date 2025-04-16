import { Decorator } from "@storybook/react";
import "@/app/styles/index.scss";

export const withStyles: Decorator = (Story) => {
  return (
    <div className="app">
      <Story />
    </div>
  );
};
