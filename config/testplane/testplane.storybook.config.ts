import { dirname, join } from "path";
import { getStoryFile } from "@testplane/storybook";
import { ConfigInput } from "testplane";

const config: ConfigInput = {
  gridUrl: "local",
  browsers: {
    chrome: {
      headless: true,
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
  plugins: {
    "@testplane/storybook": {
      storybookConfigDir: "./config/storybook",
    },
    "html-reporter/testplane": {},
  },
  screenshotsDir: (test) => {
    const relativeStoryFilePath = getStoryFile(test);
    const relativeStoryFileDirPath = dirname(relativeStoryFilePath);
    return join(
      relativeStoryFileDirPath,
      "screens",
      test.parent?.title ?? "Default",
      test.browserId,
    );
  },
};

export default config;
