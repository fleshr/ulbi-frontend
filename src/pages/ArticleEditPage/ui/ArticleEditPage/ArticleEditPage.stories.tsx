import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleEditPage } from "./ArticleEditPage";

const meta = {
  title: "pages/ArticleEditPage/ArticleEditPage",
  component: ArticleEditPage,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Create: Story = {
  decorators: [
    withRouterProvider({ path: "/articles/new", route: "/articles/new" }),
  ],
};

export const Edit: Story = {
  decorators: [
    withRouterProvider({
      path: "/articles/:id/edit",
      route: "/articles/1/edit",
    }),
  ],
};
