import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecomendationsList } from "./ArticleRecomendationsList";

const meta = {
  title: "feature/ArticleRecomendationsList/ArticleRecomendationsList",
  component: ArticleRecomendationsList,
} satisfies Meta<typeof ArticleRecomendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
