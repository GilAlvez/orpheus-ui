/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./node_modules/orpheus-ui/dist/index.js', './node_modules/orpheus-ui/dist/index.cjs'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
		colors: ({ colors }) => ({
			primary: {
				50: '#eff8ff',
				100: '#dbeefe',
				200: '#c0e3fd',
				300: '#94d2fc',
				400: '#62b8f8',
				500: '#3d9af4',
				600: '#277de9',
				700: '#1f67d6',
				800: '#2053ad',
				900: '#1f4989',
				950: '#182d53',
			},
			secondary: {
				50: '#fef8ee',
				100: '#feefd6',
				200: '#fbdbad',
				300: '#f8c079',
				400: '#f49c43',
				500: '#f17f1e',
				600: '#e26414',
				700: '#bc4d12',
				800: '#953c17',
				900: '#783416',
				950: '#411809',
			},
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white,
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
		}),
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			body: ['Roboto', 'sans-serif'],
			serif: ['Roboto Slab', 'Roboto Serif', 'Roboto', 'serif'],
			condensed: ['Roboto Condensed', 'Roboto', 'sans-serif'],
			mono: ['Roboto Mono', 'Roboto', 'monospace'],
		},
	},
	plugins: [],
};