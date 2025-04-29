import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesInfiniteList } from "./ArticlesInfiniteList";

const meta = {
  title: "pages/ArticlesPage/ArticlesInfiniteList",
  component: ArticlesInfiniteList,
} satisfies Meta<typeof ArticlesInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
