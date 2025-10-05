import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/**/storybook/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/storybook/**/*.mdx",

    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: "vite",
    },
  },
};
export default config;
