import { withWidth } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleListItemSkeleton } from "./ArticleListItemSkeleton";

const meta = {
  title: "entities/Article/ArticleListItemSkeleton",
  component: ArticleListItemSkeleton,
} satisfies Meta<typeof ArticleListItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  decorators: [withWidth()],
};

export const Big: Story = {
  args: { view: "big" },
};
