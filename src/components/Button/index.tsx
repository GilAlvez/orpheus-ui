import { Slot } from '@radix-ui/react-slot';
import { useRef, type ButtonHTMLAttributes, type KeyboardEvent } from 'react';
import { twMerge } from 'tailwind-merge';

import * as S from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: keyof typeof S.colorsScheme;
	variant?: keyof typeof S.colorsScheme.primary;
	size?: keyof typeof S.sizes;
	fullWidth?: boolean;
	asSlot?: boolean;
}

export const Button = ({
	color = 'primary',
	variant = 'filled',
	size = 'md',
	fullWidth,
	disabled,
	className,
	children,
	onKeyDown,
	asSlot,
	...rest
}: IButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleKeyPress = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			buttonRef.current?.click();
			if (asSlot) {
				buttonRef.current?.blur();
			}
		}
	};

	const Comp = asSlot ? Slot : 'button';

	return (
		<Comp
			className={twMerge(
				S.baseStyles,
				S.sizes[size],
				disabled ? S.disabled[variant] : S.colorsScheme[color][variant],
				fullWidth && 'w-full',
				className
			)}
			ref={buttonRef}
			onKeyDown={onKeyDown ?? handleKeyPress}
			tabIndex={disabled ? -1 : 0}
			disabled={disabled}
			{...rest}
		>
			{children}
		</Comp>
	);
};
