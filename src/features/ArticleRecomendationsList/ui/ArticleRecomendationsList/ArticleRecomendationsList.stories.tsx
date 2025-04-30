import { mockArticles } from "@/entities/Article";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecomendationsList } from "./ArticleRecomendationsList";

const meta = {
  title: "features/ArticleRecomendationsList/ArticleRecomendationsList",
  component: ArticleRecomendationsList,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof ArticleRecomendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    mockData: [
      {
        url: "http://localhost:8000/articles?_limit=3",
        method: "GET",
        status: 200,
        response: mockArticles.slice(0, 3),
      },
    ],
  },
};
