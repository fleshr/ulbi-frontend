import { withRouterProvider, withWidth } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockArticle } from "../../mock/article";
import { ArticleListItem } from "./ArticleListItem";

const meta = {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  args: { article: mockArticle },
  decorators: [withRouterProvider()],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = { decorators: [withWidth()] };

export const Big: Story = {
  args: { view: "big" },
};
