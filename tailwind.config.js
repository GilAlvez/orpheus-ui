/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0faff',
					100: '#e0f5fe',
					200: '#bae8fd',
					300: '#7dd5fc',
					400: '#38bcf8',
					500: '#0ea5e9',
					600: '#028ac7',
					700: '#0370a1',
					800: '#075e85',
					900: '#0c506e',
					950: '#083549',
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
