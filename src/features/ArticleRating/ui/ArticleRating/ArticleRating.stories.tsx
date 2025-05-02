import { mockRating } from "@/entities/Rating";
import { mockUser } from "@/entities/User";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRating } from "./ArticleRating";

const meta = {
  title: "features/ArticleRating/ArticleRating",
  component: ArticleRating,
  decorators: [
    withStoreProvider({ user: { user: mockUser, _initialized: true } }),
  ],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { articleId: "1" },
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
};
