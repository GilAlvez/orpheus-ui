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
			lg: { fontSize: '$7xl', lineHeight: '$12' },
			md: { fontSize: '$6xl', lineHeight: '$11' },
			sm: { fontSize: '$5xl', lineHeight: '$10' },
		},
	},
})

export const Heading = styled('h2', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$4xl', lineHeight: '$9' },
			md: { fontSize: '$3xl', lineHeight: '$8' },
			sm: { fontSize: '$2xl', lineHeight: '$7' },
		},
	},
})

export const Title = styled('h2', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$2xl', lineHeight: '$8' },
			md: { fontSize: '$xl', lineHeight: '$7' },
			sm: { fontSize: '$lg', lineHeight: '$6' },
		},
	},
})

export const Label = styled('label', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$base', lineHeight: '$6' },
			md: { fontSize: '$sm', lineHeight: '$5' },
			sm: { fontSize: '$xs', lineHeight: '$4' },
		},
	},
})

export const Body = styled('p', textBase, {
	variants: {
		size: {
			lg: { fontSize: '$lg', lineHeight: '$6' },
			md: { fontSize: '$base', lineHeight: '$5' },
			sm: { fontSize: '$sm', lineHeight: '$4' },
		},
	},
})
