import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CommentForm } from "./CommentForm";

const meta = {
  title: "entities/Comment/CommentForm",
  component: CommentForm,
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onCommentSend: fn() },
};
