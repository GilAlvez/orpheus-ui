import { css, styled } from '../../styles/stitches.config'

export const textBase = css({
	fontFamily: '$inter',
	color: 'inherit',
	lineHeight: 1,
	variants: {
		size: {
			lg: {},
			md: {},
			sm: {},
		},
		weight: {
			light: { fontWeight: '$light' },
			normal: { fontWeight: '$normal' },
			medium: { fontWeight: '$medium' },
			semibold: { fontWeight: '$semibold' },
			bold: { fontWeight: '$bold' },
		},
	},
	defaultVariants: {
		size: 'md',
		weight: 'normal',
	},
})
export const Display = styled('h1', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$7xl', lineHeight: '$none' },
			md: { fontSize: '$6xl', lineHeight: '$none' },
			sm: { fontSize: '$5xl', lineHeight: '$none' },
		},
	},
})

export const Heading = styled('h2', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$4xl', lineHeight: '$tight' },
			md: { fontSize: '$3xl', lineHeight: '$tight' },
			sm: { fontSize: '$2xl', lineHeight: '$tight' },
		},
	},
})

export const Title = styled('h2', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$2xl', lineHeight: '$snug' },
			md: { fontSize: '$xl', lineHeight: '$snug' },
			sm: { fontSize: '$lg', lineHeight: '$snug' },
		},
	},
})

export const Label = styled('label', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$base', lineHeight: '$normal' },
			md: { fontSize: '$sm', lineHeight: '$normal' },
			sm: { fontSize: '$xs', lineHeight: '$normal' },
		},
	},
})

export const Body = styled('p', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$lg', lineHeight: '$relaxed' },
			md: { fontSize: '$base', lineHeight: '$relaxed' },
			sm: { fontSize: '$sm', lineHeight: '$relaxed' },
		},
	},
})
