import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ArticleSortSelector } from "./ArticleSortSelector";

const meta = {
  title: "entities/Article/ArticleSortSelector",
  component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sort: "views",
    order: "asc",
    onChangeSort: fn(),
    onChangeOrder: fn(),
  },
};
