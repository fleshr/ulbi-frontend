import type { Meta, StoryObj } from "@storybook/react";
import { mockArticleBlockText } from "../../mock/article";
import { ArticleTextBlock } from "./ArticleTextBlock";

const meta = {
  title: "entities/Article/ArticleTextBlock",
  component: ArticleTextBlock,
} satisfies Meta<typeof ArticleTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { block: mockArticleBlockText },
};
