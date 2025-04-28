import { withRouterProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "shared/Dropdown",
  component: Dropdown,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <div>TRIGGER</div>,
    items: [
      {
        content: "first",
        onClick: fn(),
      },
      {
        content: "second",
        href: "/url",
      },
    ],
  },
};
