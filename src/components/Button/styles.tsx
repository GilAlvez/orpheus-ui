import { styled } from '../../styles/stitches.config'

export const Icon = styled('span', {
	fontSize: '$2xl',
	lineHeight: '$none',
})

export const Button = styled('button', {
	// Layout
	display: 'inline-flex',
	flexShrink: 0,
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$3',
	flexWrap: 'nowrap',
	whiteSpace: 'nowrap',

	// Font
	fontFamily: '$inter',
	fontSize: '$base',
	lineHeight: '$none',
	fontWeight: 'medium',

	// Interaction
	cursor: 'pointer',
	userSelect: 'none',

	// Appaerance
	borderWidth: 1,
	borderRadius: '$sm',
	borderColor: 'transparent',
	transitionProperty: 'all',
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '300ms',
	textDecorationLine: 'none',
	outlineStyle: '2px solid transparent',
	outlineOffset: 0,
	'&:active': {
		transitionProperty: 'none',
	},

	variants: {
		color: {
			primary: {},
			secondary: {},
			success: {},
			error: {},
			warning: {},
			dark: {},
			light: {},
		},
		variant: {
			filled: {},
			outlined: {},
			text: {},
		},
		disabled: {
			true: {
				pointerEvents: 'none',
				cursor: 'default',
			},
		},
		size: {
			xs: {
				height: '$6',
				paddingLeft: '$2',
				paddingRight: '$2',
				borderRadius: '$xs',
				fontSize: '$sm',
			},
			sm: {
				height: '$8',
				paddingLeft: '$4',
				paddingRight: '$4',
			},
			md: {
				height: '$12',
				paddingLeft: '$6',
				paddingRight: '$6',
			},
			lg: {
				height: '$14',
				paddingLeft: '$8',
				paddingRight: '$8',
			},
			xl: {
				height: '$16',
				paddingLeft: '$10',
				paddingRight: '$10',
			},
		},
	},
	defaultVariants: {
		color: 'primary',
		size: 'md',
		variant: 'filled',
	},
	compoundVariants: [
		// DISABLED
		{
			disabled: true,
			variant: 'filled',
			css: {
				backgroundColor: '$gray200',
				color: '$gray400',
				opacity: '0.90',
			},
		},
		{
			disabled: true,
			variant: 'outlined',
			css: {
				backgroundColor: 'transparent',
				color: '$gray400',
				borderColor: '$gray300',
				opacity: '0.90',
			},
		},
		{
			disabled: true,
			variant: 'text',
			css: {
				backgroundColor: 'transparent',
				color: '$gray300',
				opacity: '0.90',
			},
		},
	],
})