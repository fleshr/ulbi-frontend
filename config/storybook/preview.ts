import { withStyles } from "@/shared/lib/decorators";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [withStyles],
};

export default preview;
