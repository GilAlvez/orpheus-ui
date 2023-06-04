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
    ui-open:text-gray-600
  `),
	select: clsx(`
    flex
    items-center
    gap-1
    cursor-pointer
    text-start
    transition-all
    duration-300
    ease-in-out
    w-full
    select-none
    border
    border-gray-300
    outline-none
    outline-offset-0
    bg-white
    text-gray-700
    
    focus:ring-2
    focus:border-primary-500
    focus:ring-primary-300/95

    ui-open:ring-2
    ui-open:border-primary-500
    ui-open:ring-primary-300/95
    ui-open:text-gray-700
    ui-disabled:cursor-default
    ui-disabled:border-gray-200
    ui-disabled:bg-gray-200
    ui-disabled:text-gray-400
  `),
	listbox: clsx(`
    absolute 
    w-full 
    max-h-60
    py-1 
    px-2
    mt-1
    bg-white 
    rounded-md 
    shadow-lg
    overflow-auto
    outline-none
  `),
	option: clsx(`
    flex
    items-center
    cursor-pointer 
    select-none
    rounded-md 
    text-gray-800
    p-2
    my-1

    ui-active:bg-zinc-500/10 
    ui-selected:bg-primary-500/10
    ui-selected:ui-active:bg-primary-500/20
    ui-disabled:text-gray-300
    ui-disabled:cursor-default
  `),
	error: clsx(`
    block
    transition-all
    select-none
    text-red-500 
    mt-1
    text-xs
    tracking-wide 
  `),
	icon: clsx(`
    h-fit
    z-10
    absolute 
    inset-y-0 
    my-auto 
    left-3
    text-gray-400
    text-2xl
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

export const searchInput = {
	input: clsx(`
    w-full
  `),
	icon: clsx(`
    text-gray-300
  `),
};
