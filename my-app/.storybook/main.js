/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const custom = require("./webpack.config.js"); // 👈 Custom Webpack configuration being imported.

const config = {
  stories: [
    "../src/**/*.stories.@(mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "storybook-addon-mdx-embed",
    "@storybook/addon-docs",
    "./register.js",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
};
export default config;
