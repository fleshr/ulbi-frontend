import type { Meta, StoryObj } from "@storybook/react";
import type { WithTestplane } from "@testplane/storybook";
import { withRouterProvider } from "../../../../shared/lib/decorators";
import { mockArticles } from "../../mock/article";
import { ArticlesList } from "./ArticlesList";

const meta = {
  title: "entities/Article/ArticlesList",
  component: ArticlesList,
  decorators: [withRouterProvider()],
  testplaneConfig: {
    skip: true,
  },
} satisfies WithTestplane<Meta<typeof ArticlesList>>;

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

export const Empty: Story = {
  args: { view: "big", isLoading: false, articles: [] },
};
