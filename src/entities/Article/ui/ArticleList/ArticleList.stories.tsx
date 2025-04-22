import { withRouterProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockArticles } from "../../mock/article";
import { ArticleList } from "./ArticleList";

const meta = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  decorators: [withRouterProvider()],
  args: { articles: mockArticles },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { view: "small" },
};

export const Big: Story = {
  args: { view: "big" },
};

export const LoadingSmall: Story = {
  args: { view: "small", isLoading: true },
};

export const LoadingBig: Story = {
  args: { view: "big", isLoading: true },
};
