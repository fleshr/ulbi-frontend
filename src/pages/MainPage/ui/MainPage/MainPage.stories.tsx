import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";

const meta = {
  title: "pages/MainPage/MainPage",
  component: MainPage,
  decorators: [withRouterProvider(), withStoreProvider()],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
