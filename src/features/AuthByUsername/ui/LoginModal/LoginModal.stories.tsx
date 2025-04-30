import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import type { WithTestplane } from "@testplane/storybook";
import {
  withFullHeight,
  withStoreProvider,
} from "../../../../shared/lib/decorators";
import { LoginModal } from "./LoginModal";

const meta = {
  title: "features/AuthByUsername/LoginModal",
  component: LoginModal,
  decorators: [withStoreProvider(), withFullHeight],
  testplaneConfig: {
    assertViewOpts: {
      screenshotDelay: 5000,
    },
  },
} satisfies WithTestplane<Meta<typeof LoginModal>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: true, onClose: fn() },
};
