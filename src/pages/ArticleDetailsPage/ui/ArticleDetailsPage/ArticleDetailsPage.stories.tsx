import { mockArticle } from "@/entities/Article";
import { mockRating } from "@/entities/Rating";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsPage } from "./ArticleDetailsPage";

const meta = {
  title: "pages/ArticleDetailsPage/ArticleDetailsPage",
  component: ArticleDetailsPage,
  parameters: {
    mockData: [
      {
        url: "http://localhost:8000/article-ratings?userId=1&articleId=1",
        method: "GET",
        status: 200,
        response: [mockRating],
      },
    ],
  },
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withRouterProvider({ path: "/articles/:id", route: "/articles/1" }),
    withStoreProvider({
      articleDetails: { data: mockArticle, isLoading: false },
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
