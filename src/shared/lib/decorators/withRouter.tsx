import { Decorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const withRouter: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
