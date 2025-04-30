import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { AdminPanelPage } from "./AdminPanelPage";

const meta = {
  title: "pages/AdminPanelPage/AdminPanelPage",
  component: AdminPanelPage,
  decorators: [withRouterProvider(), withStoreProvider()],
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
