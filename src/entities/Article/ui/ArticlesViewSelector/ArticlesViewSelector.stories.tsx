import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ArticlesViewSelector } from "./ArticlesViewSelector";

const meta = {
  title: "entities/Article/ArticlesViewSelector",
  component: ArticlesViewSelector,
} satisfies Meta<typeof ArticlesViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { view: "small", onChange: fn() },
};
