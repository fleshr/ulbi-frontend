import { withWidth } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardSkeleton } from "./ArticleCardSkeleton";

const meta = {
  title: "entities/Article/ArticleCardSkeleton",
  component: ArticleCardSkeleton,
} satisfies Meta<typeof ArticleCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  decorators: [withWidth()],
};

export const Big: Story = {
  args: { view: "big" },
};
