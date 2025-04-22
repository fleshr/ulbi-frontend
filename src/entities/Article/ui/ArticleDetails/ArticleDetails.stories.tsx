import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockArticle } from "../../mock/article";
import { ArticleState } from "../../model/types";
import { ArticleDetails } from "./ArticleDetails";

const meta = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({
      articleDetails: { isLoading: false, data: mockArticle },
    }),
  ],
  args: { id: "1" },
};

export const Loading: Story = {
  decorators: [
    withStoreProvider({
      articleDetails: { isLoading: true } as ArticleState,
    }),
  ],
  args: { id: "1" },
};

export const Error: Story = {
  decorators: [
    withStoreProvider({
      articleDetails: { error: "error" } as ArticleState,
    }),
  ],
  args: { id: "1" },
};
