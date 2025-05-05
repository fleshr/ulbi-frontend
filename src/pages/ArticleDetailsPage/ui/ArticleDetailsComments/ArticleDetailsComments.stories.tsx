import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

const meta = {
  title: "pages/ArticleDetailsPage/ArticleDetailsComments",
  component: ArticleDetailsComments,
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { articleId: "1" },
  decorators: [withStoreProvider()],
};

export const Empty: Story = {
  args: { articleId: "1" },
  decorators: [withStoreProvider()],
};
