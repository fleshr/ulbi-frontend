import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { mockNotifications } from "../../mock/notifications";
import { NotificationList } from "./NotificationList";

const meta = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    mockData: [
      {
        url: "http://localhost:8000/notifications",
        method: "GET",
        status: 200,
        response: mockNotifications,
      },
    ],
  },
};
