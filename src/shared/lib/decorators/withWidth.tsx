import { Decorator } from "@storybook/react";

export const withWidth = (width: string | number = 360) => {
  const decorator: Decorator = (Story) => (
    <div style={{ width }}>
      <Story />
    </div>
  );

  return decorator;
};
