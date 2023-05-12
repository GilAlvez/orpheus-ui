import { clsx } from 'clsx';

export const baseStyles = clsx(`
	font-sans,
	text-inherit
	leading-none
`);

export const weights = {
	100: clsx(`font-thin`),
	200: clsx(`font-extralight`),
	300: clsx(`font-light`),
	400: clsx(`font-normal`),
	500: clsx(`font-medium`),
	600: clsx(`font-semibold`),
	700: clsx(`font-bold`),
	800: clsx(`font-extrabold`),
	900: clsx(`font-black`),
};

export const typographScheme = {
	display: {
		lg: clsx(`text-7xl`),
		md: clsx(`text-6xl`),
		sm: clsx(`text-5xl`),
	},
	heading: {
		lg: clsx(`text-4xl`),
		md: clsx(`text-3xl`),
		sm: clsx(`text-2xl`),
	},
	title: {
		lg: clsx(`text-2xl`),
		md: clsx(`text-xl`),
		sm: clsx(`text-lg`),
	},
	label: {
		lg: clsx(`text-base`),
		md: clsx(`text-sm`),
		sm: clsx(`text-xs`),
	},
	body: {
		lg: clsx(`text-lg`),
		md: clsx(`text-base`),
		sm: clsx(`text-sm`),
	},
};
