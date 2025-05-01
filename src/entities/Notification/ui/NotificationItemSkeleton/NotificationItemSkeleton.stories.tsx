import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItemSkeleton } from "./NotificationItemSkeleton";

const meta = {
  title: "entities/Notification/NotificationItemSkeleton",
  component: NotificationItemSkeleton,
} satisfies Meta<typeof NotificationItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
