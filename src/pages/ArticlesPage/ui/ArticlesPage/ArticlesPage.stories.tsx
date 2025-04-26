import { mockArticles } from "@/entities/Article";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockedArticlesPage } from "../../mock/articlesPage";
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
      articlesPage: {
        ...mockedArticlesPage,
        articles: mockArticles.slice(0, 9),
        view: "small",
        limit: 9,
      },
    }),
  ],
};

export const Big: Story = {
  decorators: [
    withStoreProvider({
      articlesPage: {
        ...mockedArticlesPage,
        articles: mockArticles.slice(0, 3),
        view: "big",
        limit: 3,
      },
    }),
  ],
};
