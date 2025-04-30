import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ForbiddenPage } from "./ForbiddenPage";

const meta = {
  title: "pages/ForbiddenPage/ForbiddenPage",
  component: ForbiddenPage,
  decorators: [withRouterProvider(), withStoreProvider()],
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
