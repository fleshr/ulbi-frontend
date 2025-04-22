import { withRouterProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockArticles } from "../../mock/article";
import { ArticleList } from "./ArticleList";

const meta = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { view: "small", articles: mockArticles.slice(0, 9) },
};

export const Big: Story = {
  args: { view: "big", articles: mockArticles.slice(0, 3) },
};

export const LoadingSmall: Story = {
  args: { view: "small", isLoading: true, articles: mockArticles.slice(0, 9) },
};

export const LoadingBig: Story = {
  args: { view: "big", isLoading: true, articles: mockArticles.slice(0, 3) },
};

export const LoadingSmallEmpty: Story = {
  args: { view: "small", isLoading: true, articles: [] },
};

export const LoadingBigEmpty: Story = {
  args: { view: "big", isLoading: true, articles: [] },
};
