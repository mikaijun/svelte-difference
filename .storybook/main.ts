import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    {
			name: '@storybook/addon-svelte-csf',
			options: {
				legacyTemplate: true
			}
		}
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  }
};
export default config;