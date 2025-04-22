import type { Meta, StoryObj } from "@storybook/react";
import { mockArticleBlockImage } from "../../mock/article";
import { ArticleImageBlock } from "./ArticleImageBlock";

const meta = {
  title: "entities/Article/ArticleImageBlock",
  component: ArticleImageBlock,
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { block: mockArticleBlockImage },
};
