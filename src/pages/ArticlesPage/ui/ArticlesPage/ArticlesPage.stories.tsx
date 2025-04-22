import { mockArticles } from "@/entities/Article";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesPage } from "./ArticlesPage";

const meta = {
  title: "pages/ArticlesPage/ArticlesPage",
  component: ArticlesPage,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  decorators: [
    withStoreProvider({
      articlesPage: { view: "small", articles: mockArticles },
    }),
  ],
};

export const Big: Story = {
  decorators: [
    withStoreProvider({
      articlesPage: { view: "big", articles: mockArticles },
    }),
  ],
};
