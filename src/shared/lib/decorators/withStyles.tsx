import type { Decorator } from "@storybook/react";
// eslint-disable-next-line myPlugin/public-api-import
import "@/app/styles/index.scss";

export const withStyles: Decorator = (Story) => {
  return (
    <div className="app">
      <Story />
    </div>
  );
};
