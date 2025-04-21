import avatar from "@/shared/assets/tests/avatar.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from "./Comment";

const comment = {
  id: "1",
  text: "text",
  user: {
    id: "1",
    username: "username",
    avatar,
  },
};

const meta = {
  title: "entities/Comment/Comment",
  component: Comment,
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isLoading: false, comment },
};

export const WithoutAvatar: Story = {
  args: {
    isLoading: false,
    comment: { ...comment, user: { ...comment.user, avatar: undefined } },
  },
};

export const Loading: Story = {
  args: { isLoading: true, comment },
};
