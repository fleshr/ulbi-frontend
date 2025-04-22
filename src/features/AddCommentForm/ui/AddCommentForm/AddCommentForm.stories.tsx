import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AddCommentForm } from "./AddCommentForm";

const meta = {
  title: "features/AddCommentsForm/AddCommentForm",
  component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onSendComment: fn() },
  decorators: [
    withStoreProvider({
      addCommentForm: {
        isLoading: false,
        error: undefined,
        text: "",
      },
    }),
  ],
};
