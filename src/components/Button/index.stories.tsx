import { type Meta, type StoryObj } from '@storybook/react'
import { Button, type IButtonProps } from '.'

export default {
	title: 'Components/Button',
	component: Button,
	/* args: {
		children: 'Lorem ipsum.',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			},
		},
	}, */
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {
	args: {
		children: 'Lorem ipsum.',
	},
}

/* export const Small: StoryObj<IButtonProps> = {
	args: {
		size: 'sm',
	},
}

export const Large: StoryObj<IButtonProps> = {
	args: {
		size: 'lg',
	},
}

export const CustomComponent: StoryObj<IButtonProps> = {
	args: {
		asChild: true,
		children: <p>Text with P tag</p>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
} */
