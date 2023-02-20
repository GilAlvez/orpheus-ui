import {createStitches, defaultThemeMap} from '@stitches/react'

import * as utils from './utils'
import * as theme from './theme'

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

    extendMargin: theme.extendMargin
  },
  utils: {
    ...utils
  },
  themeMap: {
    ...defaultThemeMap,
    margin: 'extendMargin',
  }
})

export const dark = 'html.dark &' // CSS selector for dark theme
createTheme('dark', {
  ...theme
})


/* globalCss({
  '@import': 'normalize.css',
  '@font-face': {
    fontFamily: 'Inter',
    src: 'local("Inter"), url("Inter.woff2")',
  },
}); */
