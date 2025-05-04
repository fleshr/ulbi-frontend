import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { AboutPage } from "./AboutPage";

const meta = {
  title: "pages/AboutPage/AboutPage",
  component: AboutPage,
  decorators: [withRouterProvider(), withStoreProvider()],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
