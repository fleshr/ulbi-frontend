import { mockArticle } from "@/entities/Article";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPage } from "./ArticleDetailsPage";

const comments = {
  ids: ["1", "2", "3"],
  entities: {
    "1": {
      id: "1",
      text: "some comment",
      articleId: "1",
      userId: "1",
      user: {
        id: "1",
        username: "admin",
        password: "123",
        role: "ADMIN",
        avatar,
      },
    },
    "2": {
      id: "2",
      text: "some comment 2",
      articleId: "1",
      userId: "1",
      user: {
        id: "1",
        username: "admin",
        password: "123",
        role: "ADMIN",
        avatar,
      },
    },
    "3": {
      id: "3",
      text: "some comment 3",
      articleId: "1",
      userId: "1",
      user: {
        id: "1",
        username: "admin",
        password: "123",
        role: "ADMIN",
        avatar,
      },
    },
  },
  isLoading: false,
};

const meta = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPage",
  component: ArticleDetailsPage,
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withRouterProvider({ path: "/articles/:id", route: "/articles/1" }),
    withStoreProvider({
      articleDetails: { data: mockArticle, isLoading: false },
      articleDetailsComments: comments,
    }),
  ],
};

export const NoComments: Story = {
  decorators: [
    withRouterProvider({ path: "/articles/:id", route: "/articles/1" }),
    withStoreProvider({
      articleDetails: { data: mockArticle, isLoading: false },
    }),
  ],
};

export const NotFound: Story = {
  decorators: [withRouterProvider(), withStoreProvider()],
};
