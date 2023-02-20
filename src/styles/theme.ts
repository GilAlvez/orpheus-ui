export const screens = {
	xs: '(min-width: 412px)',
	sm: '(min-width: 640px)',
	md: '(min-width: 768px)',
	lg: '(min-width: 1024px)',
	xl: '(min-width: 1280px)',
	'2xl': '(min-width: 1536px)',
} as const

export const colors = {
	black: '#000',
	white: '#fff',
	transparent: 'transparent',

	'primary-050': '#EFF8FF',
	'primary-100': '#DBEEFE',
	'primary-200': '#C0E3FD',
	'primary-300': '#94D2FC',
	'primary-400': '#62B8F8',
	'primary-500': '#3D9AF4',
	'primary-600': '#277CE9',
	'primary-700': '#1D5FC7',
	'primary-800': '#2053AD',
	'primary-900': '#1F4889',

	'secondary-050': '#FEF8EE',
	'secondary-100': '#FEEFD6',
	'secondary-200': '#FBDBAD',
	'secondary-300': '#F8C079',
	'secondary-400': '#F49C43',
	'secondary-500': '#F17F1E',
	'secondary-600': '#E26414',
	'secondary-700': '#BC4D12',
	'secondary-800': '#953C17',
	'secondary-900': '#783416',

	'gray-050': '#F9FAFB',
	'gray-100': '#F3F4F6',
	'gray-200': '#E5E7EB',
	'gray-300': '#D1D5DB',
	'gray-400': '#9CA3AF',
	'gray-500': '#6B7280',
	'gray-600': '#4B5563',
	'gray-700': '#374151',
	'gray-800': '#1F2937',
	'gray-900': '#111827',

	'error-050': '#FEF2F2',
	'error-100': '#FEE2E2',
	'error-200': '#FECACA',
	'error-300': '#FCA5A5',
	'error-400': '#F87171',
	'error-500': '#EF4444',
	'error-600': '#DC2626',
	'error-700': '#B91C1C',
	'error-800': '#991B1B',
	'error-900': '#7F1D1D',

	'success-050': '#F0FDF4',
	'success-100': '#DCFCE7',
	'success-200': '#BBF7D0',
	'success-300': '#86EFAC',
	'success-400': '#4ADE80',
	'success-500': '#22C55E',
	'success-600': '#16A34A',
	'success-700': '#15803D',
	'success-800': '#166534',
	'success-900': '#14532D',

	'warning-050': '#FEFCE8',
	'warning-100': '#FEF9C3',
	'warning-200': '#FEF08A',
	'warning-300': '#FDE047',
	'warning-400': '#FACC15',
	'warning-500': '#EAB308',
	'warning-600': '#CA8A04',
	'warning-700': '#A16207',
	'warning-800': '#854D0E',
	'warning-900': '#713F12',
} as const

const negativeSpace = {
	'-px': '-1px',
	'-1': '-0.25rem',
	'-2': '-0.5rem',
	'-3': '-0.75rem',
	'-4': '-1rem',
	'-5': '-1.25rem',
	'-6': '-1.5rem',
	'-8': '-2rem',
	'-10': '-2.5rem',
	'-12': '-3rem',
	'-16': '-4rem',
	'-20': '-5rem',
	'-24': '-6rem',
	'-32': '-8rem',
	'-40': '-10rem',
	'-48': '-12rem',
	'-56': '-14rem',
	'-64': '-16rem',
	'-72': '18rem',
	'-80': '20rem',
	'-96': '24rem',
} as const

export const space = {
	px: '1px',
	0: '0',
	1: '0.25rem',
	2: '0.5rem',
	3: '0.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	8: '2rem',
	10: '2.5rem',
	12: '3rem',
	16: '4rem',
	20: '5rem',
	24: '6rem',
	32: '8rem',
	40: '10rem',
	48: '12rem',
	56: '14rem',
	64: '16rem',
	72: '18rem',
	80: '20rem',
	96: '24rem',
} as const

export const sizes = { ...space }

export const fonts = {
	inter: 'Inter, sans-serif',
} as const

export const fontSizes = {
	xs: '0.75rem',
	sm: '0.875rem',
	base: '1rem',
	lg: '1.125rem',
	xl: '1.25rem',
	'2xl': '1.5rem',
	'3xl': '1.875rem',
	'4xl': '2.25rem',
	'5xl': '3rem',
	'6xl': '4rem',
} as const

export const fontWeights = {
	light: '300',
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
} as const

export const radii = {
	none: '0',
	xs: '0.125rem',
	sm: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	xl: '0.75rem',
	full: '9999px',
} as const

export const borderWidths = {
	0: '0',
	1: '1px',
	2: '2px',
	4: '4px',
	8: '8px',
} as const

export const shadows = {
	xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
	sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
	md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
	lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
	xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
	'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
	inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
	none: '0 0 #0000',
} as const

export const lineHeights = {
	none: '1',
	tight: '1.25',
	snug: '1.375',
	normal: '1.5',
	relaxed: '1.625',
	loose: '2',
	3: '.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	7: '1.75rem',
	8: '2rem',
	9: '2.25rem',
	10: '2.5rem',
} as const

export const zIndices = {
	auto: 'auto',
	0: '0',
	10: '10',
	20: '20',
	30: '30',
	40: '40',
	50: '50',
} as const

// ------------ EXTENDS ------------ //

export const extendMargin = {
	auto: 'auto',
	...space,
	...negativeSpace,
}
