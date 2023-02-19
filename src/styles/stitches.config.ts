import {createStitches} from '@stitches/react'

import * as utils from './utils'
import * as theme from './theme'

export const { styled, globalCss } = createStitches({
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
  },
  utils: {
    ...utils
  },
})


/* globalCss({
  '@import': 'normalize.css',
  '@font-face': {
    fontFamily: 'Inter',
    src: 'local("Inter"), url("Inter.woff2")',
  },
}); */
