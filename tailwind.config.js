/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	presets: [require('./src/config/orpheus.preset.js')],
	theme: {},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
