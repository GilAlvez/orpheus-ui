import { type Meta, type StoryObj } from '@storybook/react';
import { Button, type IButtonProps } from '.';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			name: 'text',
		},
		color: {
			control: 'select',
		},
		size: {
			control: 'inline-radio',
		},
		variant: {
			control: 'inline-radio',
		},
		disabled: { control: 'boolean' },
		fullWidth: { control: 'boolean' },
		hasIcon: { table: { disable: true } },
		icon: { table: { disable: true } },
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

// export const WithIcon: StoryObj<IButtonProps> = {
// 	args: {
// 		children: 'With Icon',
// 		icon: <Plus />,
// 	},
// };
