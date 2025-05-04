import {
  withFullHeight,
  withRouterProvider,
  withStoreProvider,
} from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage/NotFoundPage",
  component: NotFoundPage,
  decorators: [withFullHeight, withRouterProvider(), withStoreProvider()],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
