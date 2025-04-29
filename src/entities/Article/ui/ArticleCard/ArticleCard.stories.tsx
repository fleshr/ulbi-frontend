import { withRouterProvider, withWidth } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockArticle } from "../../mock/article";
import { ArticleCard } from "./ArticleCard";

const meta = {
  title: "entities/Article/ArticleCard",
  component: ArticleCard,
  args: { article: mockArticle },
  decorators: [withRouterProvider()],
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = { decorators: [withWidth()] };

export const Big: Story = {
  args: { view: "big" },
};
