/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    "../../react/src/**/*.mdx",
    "../../react/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
