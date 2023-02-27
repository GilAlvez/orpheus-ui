import type * as Stitches from '@stitches/react'
import { createStitches, defaultThemeMap } from '@stitches/react'

import { normalize } from './normalize'
import * as themeStyles from './theme'
import * as utils from './utils'

export const { styled, css, getCssText, globalCss, keyframes, reset, createTheme, config, prefix, theme } =
	createStitches({
		media: themeStyles.screens,
		theme: {
			colors: themeStyles.colors,
			space: themeStyles.space,
			sizes: themeStyles.sizes,
			fonts: themeStyles.fonts,
			fontSizes: themeStyles.fontSizes,
			radii: themeStyles.radii,
			borderWidths: themeStyles.borderWidths,
			shadows: themeStyles.shadows,
			fontWeights: themeStyles.fontWeights,
			lineHeights: themeStyles.lineHeights,
			zIndices: themeStyles.zIndices,

			extendMargin: themeStyles.extendMargin,
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
	...themeStyles,
})

export const globalStyles = globalCss({
	...normalize,
})

export type CSS = Stitches.CSS<typeof config>
