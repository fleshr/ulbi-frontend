import { mockNotifications } from "@/entities/Notification";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

const meta = {
  title: "widgets/Navbar/Navbar",
  component: Navbar,
  decorators: [withRouterProvider()],
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
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider({ user: { user: null, _initialized: true } })],
};

export const WithUser: Story = {
  decorators: [
    withStoreProvider({
      user: { user: { id: "1", username: "User" }, _initialized: true },
    }),
  ],
};
