import { type InputHTMLAttributes, type ReactNode } from 'react';

export interface ITextFieldProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'size' | 'className'> {
	mask?: string;
	label?: string;
	type?:
		| 'text'
		| 'email'
		| 'url'
		| 'password'
		| 'number'
		| 'date'
		| 'datetime-local'
		| 'month'
		| 'search'
		| 'tel'
		| 'time'
		| 'week';
	size?: 'sm' | 'md' | 'lg';
	error?: string;
	icon?: ReactNode;
	togglePasswordVisibility?: boolean;
	classNames?: {
		container?: string;
		label?: string;
		input?: string;
		error?: string;
		icon?: string;
	};
}
