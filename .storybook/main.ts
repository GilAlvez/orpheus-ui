import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-mdx-gfm',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config, options) {
		if (options.configType === 'PRODUCTION') {
			config.base = '/orpheus-ui/'
		}
		return config
	},
	docs: {
		autodocs: true,
	},
}

export default config
