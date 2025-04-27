import { mockArticle } from "@/entities/Article";
import { mockUser } from "@/entities/User";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { AritcleDetailsHeader } from "./AritcleDetailsHeader";

const meta = {
  title: "pages/ArticleDetailsPage/AritcleDetailsHeader",
  component: AritcleDetailsHeader,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof AritcleDetailsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider()],
  args: { articleId: "1" },
};

export const CanEdit: Story = {
  decorators: [
    withStoreProvider({
      user: { user: mockUser, _initialized: true },
      articleDetails: { isLoading: false, data: mockArticle },
    }),
  ],
  args: { articleId: "1" },
};
