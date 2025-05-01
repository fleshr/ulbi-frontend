import { mockNotifications } from "@/entities/Notification";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { NotificationsButton } from "./NotificationsButton";

const meta = {
  title: "features/NotificationsButton/NotificationsButton",
  component: NotificationsButton,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof NotificationsButton>;

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
