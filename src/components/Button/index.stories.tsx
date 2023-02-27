import { type Meta, type StoryObj } from '@storybook/react'
import { Button, type IButtonProps } from '.'

import { Plus } from 'phosphor-react'

export default {
	title: 'Components/Button',
	component: Button,

	// Default
	args: {
		color: 'primary',
		size: 'md',
		variant: 'filled',
	},

	// Panel
	argTypes: {
		children: {
			name: 'text',
		},
		color: {
			options: ['primary', 'secondary', 'success', 'error', 'warning'],
			control: {
				type: 'select',
			},
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			control: {
				type: 'inline-radio',
			},
		},
		variant: {
			options: ['filled', 'outlined', 'text'],
			control: {
				type: 'inline-radio',
			},
		},
		disabled: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		fullWidth: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		as: {
			table: {
				disable: true,
			},
		},
		css: {
			table: {
				disable: true,
			},
		},
		iconStart: {
			table: {
				disable: true,
			},
		},
		iconEnd: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {
	args: {
		children: 'Lorem ipsum.',
	},
}

export const AsLink: StoryObj<IButtonProps> = {
	name: 'As Link',
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
}

export const WithIcon: StoryObj<IButtonProps> = {
	name: 'With Icons',
	args: {
		children: 'With Icon',
		iconStart: <Plus />,
	},
}
