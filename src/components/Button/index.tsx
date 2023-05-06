import { type ComponentProps } from '@stitches/react';
import { useRef, type ElementType, type ReactNode } from 'react';

import * as S from './styles';

export interface IButtonProps extends Omit<ComponentProps<typeof S.Button>, 'isDisabled'> {
	// TODO: "as" should replace element props properly
	as?: ElementType;
	icon?: ReactNode;
}

export const Button = (props: IButtonProps) => {
	const { children, icon, onKeyDown, ref, disabled, ...rest } = props;

	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			buttonRef.current?.click();
		}
	};

	return (
		<S.Button
			hasIcon={!!icon}
			ref={ref ?? buttonRef}
			onKeyDown={onKeyDown ?? handleKeyPress}
			tabIndex={0}
			disabled={disabled}
			isDisabled={disabled}
			{...rest}
		>
			{icon && <S.Icon size={props.size}>{icon}</S.Icon>}
			{children}
		</S.Button>
	);
};
