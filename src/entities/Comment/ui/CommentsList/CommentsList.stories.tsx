import avatar from "@/shared/assets/tests/avatar.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import { CommentsList } from "./CommentsList";

const comments = [
  {
    id: "1",
    text: "text",
    user: {
      id: "1",
      username: "username",
      avatar,
    },
  },
  {
    id: "2",
    text: "text",
    user: {
      id: "1",
      username: "username",
      avatar,
    },
  },
  {
    id: "3",
    text: "text",
    user: {
      id: "1",
      username: "username",
      avatar,
    },
  },
];

const meta = {
  title: "entities/Comment/CommentsList",
  component: CommentsList,
} satisfies Meta<typeof CommentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { comments },
};

export const Loading: Story = {
  args: { comments, isLoading: true },
};

export const Empty: Story = {
  args: { comments: [] },
};
