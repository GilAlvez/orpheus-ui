/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
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
			},
			screens: {
				'3xl': '1920px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
