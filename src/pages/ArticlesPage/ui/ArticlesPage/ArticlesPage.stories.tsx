import { mockArticles } from "@/entities/Article";
import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import {
  withRouterProvider,
  withStoreProvider,
} from "../../../../shared/lib/decorators";
import { mockedArticlesPage } from "../../mock/articlesPage";
import { ArticlesPage } from "./ArticlesPage";

const meta = {
  title: "pages/ArticlesPage/ArticlesPage",
  component: ArticlesPage,
  decorators: [withRouterProvider()],
  testplaneConfig: {
    skip: true,
  },
} satisfies WithTestplane<Meta<typeof ArticlesPage>>;

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
