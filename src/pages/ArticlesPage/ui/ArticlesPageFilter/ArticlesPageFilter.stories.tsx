import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockedArticlesPage } from "../../mock/articlesPage";
import { ArticlesPageFilter } from "./ArticlesPageFilter";

const meta = {
  title: "pages/ArticlesPage/ArticlesPageFilter",
  component: ArticlesPageFilter,
} satisfies Meta<typeof ArticlesPageFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider({ articlesPage: mockedArticlesPage })],
};
