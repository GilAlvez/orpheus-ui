import { createStitches, defaultThemeMap } from '@stitches/react'

import { fontFace } from './fontFace'
import { normalize } from './normalize'
import * as theme from './theme'
import * as utils from './utils'

export const { styled, globalCss, createTheme, getCssText } = createStitches({
	media: theme.screens,
	theme: {
		colors: theme.colors,
		space: theme.space,
		sizes: theme.sizes,
		fonts: theme.fonts,
		fontSizes: theme.fontSizes,
		radii: theme.radii,
		borderWidths: theme.borderWidths,
		shadows: theme.shadows,
		fontWeights: theme.fontWeights,
		lineHeights: theme.lineHeights,
		zIndices: theme.zIndices,

		extendMargin: theme.extendMargin,
	},
	utils: {
		...utils,
	},
	themeMap: {
		...defaultThemeMap,
		margin: 'extendMargin',
	},
})

export const dark = 'html.dark &' // CSS selector for dark theme
createTheme('dark', {
	...theme,
})

export const globalStyles = globalCss({
	...normalize,
	...fontFace,
})
