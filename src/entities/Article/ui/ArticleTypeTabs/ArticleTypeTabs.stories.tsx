import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ArticleType } from "../../constants/articleType";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

const meta = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: fn(),
  },
};
