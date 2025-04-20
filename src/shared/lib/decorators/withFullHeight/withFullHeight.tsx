import "@/app/styles/index.scss";
import { Decorator } from "@storybook/react";
import "./styles.scss";

export const withFullHeight: Decorator = (Story) => {
  return (
    <div className="with-full-height">
      <Story />
    </div>
  );
};
