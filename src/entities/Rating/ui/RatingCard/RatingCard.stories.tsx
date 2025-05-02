import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RatingCard } from "./RatingCard";

const meta = {
  title: "entities/Rating/RatingCard",
  component: RatingCard,
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutFeedback: Story = {
  args: { title: "Some title", onAccept: fn() },
};

export const WithFeedback: Story = {
  args: {
    title: "Some title",
    hasFeedback: true,
    feedbackTitle: "Feedback",
    onAccept: fn(),
    onCancel: fn(),
  },
};
