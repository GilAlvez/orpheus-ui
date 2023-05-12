import {
	useRef,
	type ButtonHTMLAttributes,
	type HTMLAttributes,
	type KeyboardEvent,
	type ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';

import * as S from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: keyof typeof S.colorsScheme;
	variant?: keyof typeof S.colorsScheme.primary;
	size?: keyof typeof S.sizes;
	fullWidth?: boolean;
	icon?: ReactNode;
}

export const Button = ({
	color = 'primary',
	variant = 'filled',
	size = 'md',
	fullWidth,
	icon,
	disabled,
	className,
	children,
	onKeyDown,
	...rest
}: IButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			buttonRef.current?.click();
		}
	};

	return (
		<button
			className={twMerge(
				S.baseStyles,
				S.sizes[size],
				disabled ? S.disabled[variant] : S.colorsScheme[color][variant],
				fullWidth && 'w-full',
				className
			)}
			ref={buttonRef}
			onKeyDown={onKeyDown ?? handleKeyPress}
			tabIndex={0}
			disabled={disabled}
			{...rest}
		>
			{icon && <Icon size={size}>{icon}</Icon>}
			{children}
		</button>
	);
};

interface IIconProps extends HTMLAttributes<HTMLSpanElement> {
	size?: keyof typeof S.sizes;
}

const Icon = ({ size = 'md', children, ...rest }: IIconProps) => {
	return (
		<span
			className={twMerge(S.iconBaseStyles, S.iconSizes[size], size !== 'xs' && '-ml-2')}
			{...rest}
		>
			{children}
		</span>
	);
};
