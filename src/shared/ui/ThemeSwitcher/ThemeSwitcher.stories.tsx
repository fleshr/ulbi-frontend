import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { withTheme } from "@/shared/lib/decorators";

const meta = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  decorators: [withTheme],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
