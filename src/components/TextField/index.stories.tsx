import { type Meta, type StoryObj } from '@storybook/react';
import { TextField } from '.';
import { type ITextFieldProps } from './types';

export default {
	title: 'Components/Input',
	component: TextField,
	argTypes: {
		disabled: { control: 'boolean' },
		mask: { table: { disable: true } },
		label: { table: { disable: true } },
		icon: { table: { disable: true } },
		onChange: { table: { disable: true } },
		error: { table: { disable: true } },
		togglePasswordVisibility: { table: { disable: true } },
		classNames: { table: { disable: true } },
	},
	args: {
		placeholder: 'Type here...',
		size: 'md',
		disabled: false,
		classNames: { container: 'md:w-1/2 xl:w-1/4' },
	},
} as Meta<ITextFieldProps>;

export const Default: StoryObj<ITextFieldProps> = {};
export const WithLabel: StoryObj<ITextFieldProps> = {
	args: {
		label: 'Email',
	},
	argTypes: {
		label: { table: { disable: false } },
	},
};
export const PasswordField: StoryObj<ITextFieldProps> = {
	args: {
		type: 'password',
		label: 'Password',
		togglePasswordVisibility: true,
	},
	argTypes: {
		label: { table: { disable: false } },
		togglePasswordVisibility: { table: { disable: false } },
	},
};
export const ErrorState: StoryObj<ITextFieldProps> = {
	args: {
		type: 'email',
		label: 'Email',
		error: 'Please enter a valid email address',
	},
	argTypes: {
		label: { table: { disable: false } },
		error: { table: { disable: false } },
	},
};
export const Masked: StoryObj<ITextFieldProps> = {
	args: {
		label: 'Code',
		mask: 'ID:aa-99/**',
	},
	argTypes: {
		label: { table: { disable: false } },
		mask: { table: { disable: false } },
	},
};
