import { themes } from '@storybook/theming'
import { globalStyles } from '../src/styles/stitches.config'

globalStyles()
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		theme: themes.dark,
	},
}
