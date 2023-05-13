import clsx from 'clsx';

export const baseStyles = {
	container: clsx(`
    flex 
    flex-col
  `),
	label: clsx(`
    transition-all
    duration-300
    text-sm 
    whitespace-nowrap 
    select-none 
    text-gray-600 
    dark:text-gray-300
  `),
	input: clsx(`
	  transition-all
    duration-300
    ease-in-out
    !w-full
    border
    select-none
    outline-none
    outline-offset-0
    border-gray-300
    bg-white
    text-gray-700

    focus:ring-2
    focus:border-primary-500
	  focus:ring-primary-300/95

    disabled:cursor-default
    disabled:border-gray-200
    disabled:bg-gray-200
    disabled:text-gray-400
  `),
	error: clsx(`
    select-none
    absolute 
    right-0
    -bottom-[1.1rem] 
    text-red-500 
    text-xs
    tracking-wide 
    whitespace-nowrap
  `),
	icon: clsx(`
    h-fit
    z-10
    absolute 
    inset-y-0 
    my-auto 
    left-3
    text-gray-400
    text-xl
  `),
};

export const sizes = {
	sm: clsx(`
    h-9
    px-3
    rounded
  `),
	md: clsx(`
    h-12
    px-4
    rounded-md
  `),
	lg: clsx(`
    h-14
    px-5
    rounded-md
  `),
};

export const errorState = {
	label: clsx(`
    text-red-500
  `),
	input: clsx(`
    ring-2
    border-red-400 
    text-red-500 
    ring-red-300/95
    
    focus:text-gray-800 
    focus:border-red-400 
    focus:ring-red-300/95
  `),
};

export const floatIcon = clsx(`
  h-fit
  z-10
  absolute 
  inset-y-0 
  my-auto 
  right-3
  text-gray-400
  text-xl  
`);
