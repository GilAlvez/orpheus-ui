import { type Meta, type StoryObj } from '@storybook/react';
import { Button, type IButtonProps } from '.';

import { Plus } from 'phosphor-react';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			name: 'text',
		},
		color: {
			options: ['primary', 'secondary', 'success', 'error', 'warning'],
			control: 'select',
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: 'inline-radio',
		},
		variant: {
			options: ['filled', 'outlined', 'ghost'],
			control: 'inline-radio',
		},
		disabled: { control: 'boolean' },
		fullWidth: { control: 'boolean' },
		as: { table: { disable: true } },
		css: { table: { disable: true } },
		hasIcon: { table: { disable: true } },
		icon: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	args: {
		color: 'primary',
		size: 'md',
		variant: 'filled',
		disabled: false,
		fullWidth: false,
	},
} as Meta<IButtonProps>;

export const Default: StoryObj<IButtonProps> = {
	args: {
		children: 'Lorem ipsum.',
	},
};

export const AsLink: StoryObj<IButtonProps> = {
	args: {
		as: 'a',
		children: 'As Link',
	},
	argTypes: {
		as: {
			table: {
				disable: false,
			},
		},
	},
};

export const WithIcon: StoryObj<IButtonProps> = {
	args: {
		children: 'With Icon',
		icon: <Plus />,
	},
};
