import { mockComment } from "@/entities/Comment";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

const comments = {
  ids: ["1", "2", "3"],
  entities: {
    "1": { ...mockComment, id: "1" },
    "2": { ...mockComment, id: "2" },
    "3": { ...mockComment, id: "3" },
  },
  isLoading: false,
};

const meta = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { articleId: "1" },
  decorators: [
    withStoreProvider({
      articleDetailsPage: {
        comments,
        recomendations: { isLoading: false, recomendations: [] },
      },
    }),
  ],
};

export const Empty: Story = {
  args: { articleId: "1" },
  decorators: [
    withStoreProvider({
      articleDetailsPage: {
        comments: { ...comments, ids: [], entities: {} },
        recomendations: { isLoading: false, recomendations: [] },
      },
    }),
  ],
};
