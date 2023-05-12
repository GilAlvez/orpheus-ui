import { clsx } from 'clsx';

export const baseStyles = clsx(`
	inline-flex
  shrink-0
  items-center
  justify-center
  text-center
  
  flex-nowrap
  whitespace-nowrap

	font-sans
	text-base
	leading-none
	font-medium

  select-none
	cursor-pointer

  border
  rounded
  transition-all
  duration-300
  no-underline
  outline-none
	outline-offset-0
	
  active:transition-none
`);

export const sizes = {
	xs: clsx('h-6 px-2 rounded-xs text-sm gap-1'),
	sm: clsx('h-9 px-4 gap-1'),
	md: clsx('h-12 px-6 gap-2'),
	lg: clsx('h-14 px-7 text-lg gap-2'),
	xl: clsx('h-16 px-7 text-xl gap-3'),
};

export const disabled = {
	filled: clsx(`
		bg-gray-200 
		text-gray-400
		opacity-80 
		pointer-events-none 
		cursor-default
	`),
	outlined: clsx(`
		bg-transparent
		text-gray-400
		border-gray-300
		opacity-80 
		pointer-events-none 
		cursor-default
	`),
	ghost: clsx(`
		text-gray-400
		bg-transparent
		opacity-80 
		shadow-none
		pointer-events-none 
		cursor-default
	`),
};

export const colorsScheme = {
	// #0ea5e9
	primary: {
		filled: clsx(`
			text-white
			bg-primary-500
			shadow-sm
			hover:bg-primary-600
			focus:ring-2
			focus:ring-primary-300/95
			active:bg-primary-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-primary-500
			bg-transparent
			border-primary-500/80
			shadow-sm
			hover:bg-primary-500/5
			hover:border-primary-500
			focus:bg-primary-500/5
			focus:ring-1
			focus:ring-primary-300/80
			active:bg-primary-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-primary-500
			bg-transparent
			hover:bg-primary-500/10
			focus:bg-primary-500/10
			active:bg-primary-500/20
		`),
	},
	// #f17f1e
	secondary: {
		filled: clsx(`
			text-white
			bg-secondary-500
			shadow-sm
			hover:bg-secondary-600
			focus:ring-2
			focus:ring-secondary-300/95
			active:bg-secondary-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-secondary-500
			bg-transparent
			border-secondary-500/80
			shadow-sm
			hover:bg-secondary-500/5
			hover:border-secondary-500
			focus:bg-secondary-500/5
			focus:ring-1
			focus:ring-secondary-300/80
			active:bg-secondary-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-secondary-500
			bg-transparent
			hover:bg-secondary-500/10
			focus:bg-secondary-500/10
			active:bg-secondary-500/20
		`),
	},
	// #6b7280
	gray: {
		filled: clsx(`
			text-white
			bg-gray-500
			shadow-sm
			hover:bg-gray-600
			focus:ring-2
			focus:ring-gray-300/95
			active:bg-gray-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-gray-500
			bg-transparent
			border-gray-500/80
			shadow-sm
			hover:bg-gray-500/5
			hover:border-gray-500
			focus:bg-gray-500/5
			focus:ring-1
			focus:ring-gray-300/80
			active:bg-gray-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-gray-500
			bg-transparent
			hover:bg-gray-500/10
			focus:bg-gray-500/10
			active:bg-gray-500/20
		`),
	},
	// #ef4444
	red: {
		filled: clsx(`
			text-white
			bg-red-500
			shadow-sm
			hover:bg-red-600
			focus:ring-2
			focus:ring-red-300/95
			active:bg-red-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-red-500
			bg-transparent
			border-red-500/80
			shadow-sm
			hover:bg-red-500/5
			hover:border-red-500
			focus:bg-red-500/5
			focus:ring-1
			focus:ring-red-300/80
			active:bg-red-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-red-500
			bg-transparent
			hover:bg-red-500/10
			focus:bg-red-500/10
			active:bg-red-500/20
		`),
	},
	// #f97316
	orange: {
		filled: clsx(`
			text-white
			bg-orange-500
			shadow-sm
			hover:bg-orange-600
			focus:ring-2
			focus:ring-orange-300/95
			active:bg-orange-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-orange-500
			bg-transparent
			border-orange-500/80
			shadow-sm
			hover:bg-orange-500/5
			hover:border-orange-500
			focus:bg-orange-500/5
			focus:ring-1
			focus:ring-orange-300/80
			active:bg-orange-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-orange-500
			bg-transparent
			hover:bg-orange-500/10
			focus:bg-orange-500/10
			active:bg-orange-500/20
		`),
	},
	// #f59e0b
	amber: {
		filled: clsx(`
			text-white
			bg-amber-500
			shadow-sm
			hover:bg-amber-600
			focus:ring-2
			focus:ring-amber-300/95
			active:bg-amber-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-amber-500
			bg-transparent
			border-amber-500/80
			shadow-sm
			hover:bg-amber-500/5
			hover:border-amber-500
			focus:bg-amber-500/5
			focus:ring-1
			focus:ring-amber-300/80
			active:bg-amber-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-amber-500
			bg-transparent
			hover:bg-amber-500/10
			focus:bg-amber-500/10
			active:bg-amber-500/20
		`),
	},
	// #eab308
	yellow: {
		filled: clsx(`
			text-white
			bg-yellow-500
			shadow-sm
			hover:bg-yellow-600
			focus:ring-2
			focus:ring-yellow-300/95
			active:bg-yellow-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-yellow-500
			bg-transparent
			border-yellow-500/80
			shadow-sm
			hover:bg-yellow-500/5
			hover:border-yellow-500
			focus:bg-yellow-500/5
			focus:ring-1
			focus:ring-yellow-300/80
			active:bg-yellow-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-yellow-500
			bg-transparent
			hover:bg-yellow-500/10
			focus:bg-yellow-500/10
			active:bg-yellow-500/20
		`),
	},
	// #84cc16
	lime: {
		filled: clsx(`
			text-white
			bg-lime-500
			shadow-sm
			hover:bg-lime-600
			focus:ring-2
			focus:ring-lime-300/95
			active:bg-lime-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-lime-500
			bg-transparent
			border-lime-500/80
			shadow-sm
			hover:bg-lime-500/5
			hover:border-lime-500
			focus:bg-lime-500/5
			focus:ring-1
			focus:ring-lime-300/80
			active:bg-lime-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-lime-500
			bg-transparent
			hover:bg-lime-500/10
			focus:bg-lime-500/10
			active:bg-lime-500/20
		`),
	},
	// #22c55e
	green: {
		filled: clsx(`
			text-white
			bg-green-500
			shadow-sm
			hover:bg-green-600
			focus:ring-2
			focus:ring-green-300/95
			active:bg-green-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-green-500
			bg-transparent
			border-green-500/80
			shadow-sm
			hover:bg-green-500/5
			hover:border-green-500
			focus:bg-green-500/5
			focus:ring-1
			focus:ring-green-300/80
			active:bg-green-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-green-500
			bg-transparent
			hover:bg-green-500/10
			focus:bg-green-500/10
			active:bg-green-500/20
		`),
	},
	// #10b981
	emerald: {
		filled: clsx(`
			text-white
			bg-emerald-500
			shadow-sm
			hover:bg-emerald-600
			focus:ring-2
			focus:ring-emerald-300/95
			active:bg-emerald-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-emerald-500
			bg-transparent
			border-emerald-500/80
			shadow-sm
			hover:bg-emerald-500/5
			hover:border-emerald-500
			focus:bg-emerald-500/5
			focus:ring-1
			focus:ring-emerald-300/80
			active:bg-emerald-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-emerald-500
			bg-transparent
			hover:bg-emerald-500/10
			focus:bg-emerald-500/10
			active:bg-emerald-500/20
		`),
	},
	// #14b8a6
	teal: {
		filled: clsx(`
			text-white
			bg-teal-500
			shadow-sm
			hover:bg-teal-600
			focus:ring-2
			focus:ring-teal-300/95
			active:bg-teal-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-teal-500
			bg-transparent
			border-teal-500/80
			shadow-sm
			hover:bg-teal-500/5
			hover:border-teal-500
			focus:bg-teal-500/5
			focus:ring-1
			focus:ring-teal-300/80
			active:bg-teal-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-teal-500
			bg-transparent
			hover:bg-teal-500/10
			focus:bg-teal-500/10
			active:bg-teal-500/20
		`),
	},
	// #06b6d4
	cyan: {
		filled: clsx(`
			text-white
			bg-cyan-500
			shadow-sm
			hover:bg-cyan-600
			focus:ring-2
			focus:ring-cyan-300/95
			active:bg-cyan-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-cyan-500
			bg-transparent
			border-cyan-500/80
			shadow-sm
			hover:bg-cyan-500/5
			hover:border-cyan-500
			focus:bg-cyan-500/5
			focus:ring-1
			focus:ring-cyan-300/80
			active:bg-cyan-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-cyan-500
			bg-transparent
			hover:bg-cyan-500/10
			focus:bg-cyan-500/10
			active:bg-cyan-500/20
		`),
	},
	// #0ea5e9
	sky: {
		filled: clsx(`
			text-white
			bg-sky-500
			shadow-sm
			hover:bg-sky-600
			focus:ring-2
			focus:ring-sky-300/95
			active:bg-sky-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-sky-500
			bg-transparent
			border-sky-500/80
			shadow-sm
			hover:bg-sky-500/5
			hover:border-sky-500
			focus:bg-sky-500/5
			focus:ring-1
			focus:ring-sky-300/80
			active:bg-sky-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-sky-500
			bg-transparent
			hover:bg-sky-500/10
			focus:bg-sky-500/10
			active:bg-sky-500/20
		`),
	},
	// #3b82f6
	blue: {
		filled: clsx(`
			text-white
			bg-blue-500
			shadow-sm
			hover:bg-blue-600
			focus:ring-2
			focus:ring-blue-300/95
			active:bg-blue-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-blue-500
			bg-transparent
			border-blue-500/80
			shadow-sm
			hover:bg-blue-500/5
			hover:border-blue-500
			focus:bg-blue-500/5
			focus:ring-1
			focus:ring-blue-300/80
			active:bg-blue-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-blue-500
			bg-transparent
			hover:bg-blue-500/10
			focus:bg-blue-500/10
			active:bg-blue-500/20
		`),
	},
	// #6366f1
	indigo: {
		filled: clsx(`
			text-white
			bg-indigo-500
			shadow-sm
			hover:bg-indigo-600
			focus:ring-2
			focus:ring-indigo-300/95
			active:bg-indigo-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-indigo-500
			bg-transparent
			border-indigo-500/80
			shadow-sm
			hover:bg-indigo-500/5
			hover:border-indigo-500
			focus:bg-indigo-500/5
			focus:ring-1
			focus:ring-indigo-300/80
			active:bg-indigo-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-indigo-500
			bg-transparent
			hover:bg-indigo-500/10
			focus:bg-indigo-500/10
			active:bg-indigo-500/20
		`),
	},
	// #8b5cf6
	violet: {
		filled: clsx(`
			text-white
			bg-violet-500
			shadow-sm
			hover:bg-violet-600
			focus:ring-2
			focus:ring-violet-300/95
			active:bg-violet-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-violet-500
			bg-transparent
			border-violet-500/80
			shadow-sm
			hover:bg-violet-500/5
			hover:border-violet-500
			focus:bg-violet-500/5
			focus:ring-1
			focus:ring-violet-300/80
			active:bg-violet-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-violet-500
			bg-transparent
			hover:bg-violet-500/10
			focus:bg-violet-500/10
			active:bg-violet-500/20
		`),
	},
	// #a855f7
	purple: {
		filled: clsx(`
			text-white
			bg-purple-500
			shadow-sm
			hover:bg-purple-600
			focus:ring-2
			focus:ring-purple-300/95
			active:bg-purple-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-purple-500
			bg-transparent
			border-purple-500/80
			shadow-sm
			hover:bg-purple-500/5
			hover:border-purple-500
			focus:bg-purple-500/5
			focus:ring-1
			focus:ring-purple-300/80
			active:bg-purple-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-purple-500
			bg-transparent
			hover:bg-purple-500/10
			focus:bg-purple-500/10
			active:bg-purple-500/20
		`),
	},
	// #d946ef
	fuchsia: {
		filled: clsx(`
			text-white
			bg-fuchsia-500
			shadow-sm
			hover:bg-fuchsia-600
			focus:ring-2
			focus:ring-fuchsia-300/95
			active:bg-fuchsia-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-fuchsia-500
			bg-transparent
			border-fuchsia-500/80
			shadow-sm
			hover:bg-fuchsia-500/5
			hover:border-fuchsia-500
			focus:bg-fuchsia-500/5
			focus:ring-1
			focus:ring-fuchsia-300/80
			active:bg-fuchsia-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-fuchsia-500
			bg-transparent
			hover:bg-fuchsia-500/10
			focus:bg-fuchsia-500/10
			active:bg-fuchsia-500/20
		`),
	},
	// #ec4899
	pink: {
		filled: clsx(`
			text-white
			bg-pink-500
			shadow-sm
			hover:bg-pink-600
			focus:ring-2
			focus:ring-pink-300/95
			active:bg-pink-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-pink-500
			bg-transparent
			border-pink-500/80
			shadow-sm
			hover:bg-pink-500/5
			hover:border-pink-500
			focus:bg-pink-500/5
			focus:ring-1
			focus:ring-pink-300/80
			active:bg-pink-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-pink-500
			bg-transparent
			hover:bg-pink-500/10
			focus:bg-pink-500/10
			active:bg-pink-500/20
		`),
	},
	// #f43f5e
	rose: {
		filled: clsx(`
			text-white
			bg-rose-500
			shadow-sm
			hover:bg-rose-600
			focus:ring-2
			focus:ring-rose-300/95
			active:bg-rose-600/90
			active:ring
			active:shadow-none
		`),
		outlined: clsx(`
			text-rose-500
			bg-transparent
			border-rose-500/80
			shadow-sm
			hover:bg-rose-500/5
			hover:border-rose-500
			focus:bg-rose-500/5
			focus:ring-1
			focus:ring-rose-300/80
			active:bg-rose-500/10
			active:ring-2
			active:shadow-none
		`),
		ghost: clsx(`
			text-rose-500
			bg-transparent
			hover:bg-rose-500/10
			focus:bg-rose-500/10
			active:bg-rose-500/20
		`),
	},
};

export const iconBaseStyles = clsx(`
  inline-flex
  leading-none
`);

export const iconSizes = {
	xs: clsx('text-lg'),
	sm: clsx('text-xl'),
	md: clsx('text-2xl'),
	lg: clsx('text-2xl'),
	xl: clsx('text-3xl'),
};
