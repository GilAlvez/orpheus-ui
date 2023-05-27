import { Eye, EyeSlash } from '@phosphor-icons/react';
import { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMaskedInput } from '../../hooks/useMaskedInput';
import * as S from './styles';
import { type ITextFieldProps } from './types';

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>((props, ref) => {
	const {
		mask,
		id,
		label,
		type,
		size = 'md',
		error,
		icon,
		classNames,
		togglePasswordVisibility,
		onChange,
		disabled,
		...rest
	} = props;

	const { maskedValue, handleChange } = useMaskedInput({ mask, onChange });
	const [dynamicType, setDynamicType] = useState(type ?? 'text');

	return (
		<label className={twMerge(S.baseStyles.container, classNames?.container)}>
			{label && (
				<span
					className={twMerge(S.baseStyles.label, !!error && S.errorState.label, classNames?.label)}
				>
					{label}
				</span>
			)}
			<div className="relative">
				<figure className={twMerge(S.baseStyles.icon)}>{icon}</figure>
				<input
					type={dynamicType}
					ref={ref}
					className={twMerge(
						S.baseStyles.input,
						S.sizes[size],
						!!error && S.errorState.input,
						!!togglePasswordVisibility && 'pr-10',
						!!icon && 'pl-10',
						classNames?.input
					)}
					disabled={disabled}
					value={maskedValue}
					onChange={handleChange}
					{...rest}
				/>
				{error && <span className={twMerge(S.baseStyles.error, classNames?.error)}>{error}</span>}
				{togglePasswordVisibility && (
					<figure className={twMerge(S.floatIcon)}>
						{dynamicType === 'password' ? (
							<Eye weight="light" onClick={() => !disabled && setDynamicType('text')} />
						) : (
							<EyeSlash weight="light" onClick={() => !disabled && setDynamicType('password')} />
						)}
					</figure>
				)}
			</div>
		</label>
	);
});

TextField.displayName = 'TextField';
