import type { ConfigInput } from "testplane";

const config: ConfigInput = {
  gridUrl: "local",
  baseUrl: "http://localhost",
  pageLoadTimeout: 0,
  httpTimeout: 60000,
  testTimeout: 90000,
  resetCursor: false,
  sets: {
    desktop: {
      files: ["testplane-tests/**/*.testplane.(t|j)s"],
      browsers: ["chrome"],
    },
  },
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
    "html-reporter/testplane": {
      enabled: false,
      path: "testplane-report",
      defaultView: "all",
      diffMode: "3-up-scaled",
    },
  },
};

export default config;
