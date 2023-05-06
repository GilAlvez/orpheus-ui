import { styled } from '../../styles/stitches.config';

// Iterable colors that isnt dark, light or disabled
const colors = ['primary', 'secondary', 'success', 'error', 'warning'];

export const Button = styled('button', {
	// Layout
	display: 'inline-flex',
	flexShrink: 0,
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',
	flexWrap: 'nowrap',
	whiteSpace: 'nowrap',

	// Font
	fontFamily: '$inter',
	fontSize: '$base',
	lineHeight: '$none',
	fontWeight: '$medium',

	// Interaction
	cursor: 'pointer',
	userSelect: 'none',

	// Appaerance
	borderWidth: 1,
	borderRadius: '$sm',
	borderColor: 'transparent',
	boxShadow: '$sm',
	transitionProperty: 'all',
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '300ms',
	textDecorationLine: 'none',
	outline: '2px solid transparent',
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
		},
		variant: {
			filled: {},
			outlined: {},
			ghost: {},
		},
		disabled: {
			true: {
				pointerEvents: 'none',
				cursor: 'default',
			},
		},
		fullWidth: {
			true: {
				width: '100%',
			},
		},
		hasIcon: {
			true: {},
		},
		size: {
			xs: {
				height: '$6',
				paddingLeft: '$2',
				paddingRight: '$2',
				borderRadius: '$xs',
				fontSize: '$sm',
				fontWeight: '$medium',
				gap: '$1',
			},
			sm: {
				height: '$9',
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
				paddingLeft: '$7',
				paddingRight: '$7',
				fontSize: '$lg',
			},
			xl: {
				height: '$16',
				paddingLeft: '$7',
				paddingRight: '$7',
				fontSize: '$xl',
			},
		},
	},
	defaultVariants: {
		color: 'primary',
		size: 'md',
		variant: 'filled',
	},
	compoundVariants: [
		// ALL COLORS MATCHING WITH VARIANTS
		...colors.map((color) => ({
			variant: 'filled',
			color,
			disabled: false,
			css: {
				color: '$white',
				backgroundColor: `$${color}500`,
				'&:hover': {
					backgroundColor: `$${color}600`,
				},
				'&:focus': {
					_outlineColorWithOpacity: `${color}300/95`,
				},
				'&:active': {
					backgroundColor: `$${color}500`,
					outlineWidth: '3px',
					boxShadow: '$none',
				},
			},
		})),
		...colors.map((color) => ({
			variant: 'outlined',
			color,
			disabled: false,
			css: {
				color: `$${color}500`,
				backgroundColor: 'transparent',
				_borderColorWithOpacity: `${color}500/90`,
				'&:hover': {
					_backgroundWithOpacity: `${color}500/10`,
					borderColor: `$${color}500`,
				},
				'&:focus': {
					_backgroundWithOpacity: `${color}500/10`,
					_outlineColorWithOpacity: `${color}300/80`,
				},
				'&:active': {
					backgroundColor: '$transparent',
					outlineWidth: '3px',
					boxShadow: '$none',
				},
			},
		})),
		...colors.map((color) => ({
			variant: 'ghost',
			color,
			disabled: false,
			css: {
				color: `$${color}500`,
				backgroundColor: 'transparent',
				boxShadow: '$none',
				'&:hover': {
					_backgroundWithOpacity: `${color}500/15`,
				},
				'&:focus': {
					_backgroundWithOpacity: `${color}500/15`,
				},
				'&:active': {
					_backgroundWithOpacity: `${color}500/25`,
				},
			},
		})),
		// DISABLED
		{
			disabled: true,
			variant: 'filled',
			css: {
				backgroundColor: '$gray200',
				color: '$gray400',
				opacity: '0.80',
			},
		},
		{
			disabled: true,
			variant: 'outlined',
			css: {
				backgroundColor: 'transparent',
				color: '$gray400',
				borderColor: '$gray300',
				opacity: '0.80',
			},
		},
		{
			disabled: true,
			variant: 'ghost',
			css: {
				backgroundColor: 'transparent',
				color: '$gray400',
				opacity: '0.80',
				boxShadow: '$none',
			},
		},
		// ICONS
		{
			hasIcon: true,
			size: 'xs',
			css: {
				paddingLeft: '$2',
			},
		},
		{
			hasIcon: true,
			size: 'md',
			css: {
				paddingLeft: '$4',
			},
		},
	],
});

export const Icon = styled('span', {
	display: 'inline-flex',
	lineHeight: '$none',

	variants: {
		size: {
			xs: {
				fontSize: '$lg',
			},
			sm: {
				fontSize: '$xl',
			},
			md: {
				fontSize: '$2xl',
			},
			lg: {
				fontSize: '$2xl',
			},
			xl: {
				fontSize: '$3xl',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
});
