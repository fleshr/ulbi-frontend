import type { Meta, StoryObj } from "@storybook/react";
import { mockNotification } from "../../mock/notifications";
import { NotificationItem } from "./NotificationItem";

const meta = {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { notification: mockNotification },
};
