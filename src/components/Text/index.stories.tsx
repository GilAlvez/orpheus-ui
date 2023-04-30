import { type ComponentProps } from '@stitches/react'
import { type Meta, type Story } from '@storybook/react'
import Text from '.'

interface TextStoryArgs extends ComponentProps<typeof Text.Body> {
	componentName: keyof typeof Text
}

const sizes = ['sm', 'md', 'lg']
const weights = ['normal', 'semibold', 'bold']

const meta: Meta<TextStoryArgs> & { subcomponents: Record<string, Story> } = {
	title: 'Components/Text',
	subcomponents: {
		Display: Text.Display,
		Heading: Text.Heading,
		Title: Text.Title,
		Label: Text.Label,
		Body: Text.Body,
	},
	args: {
		size: 'md',
		weight: 'normal',
	},
	argTypes: {
		componentName: { table: { disable: true } },
		children: { control: 'text' },
		as: { control: 'text' },
		size: { control: 'inline-radio', options: sizes },
		weight: { control: 'inline-radio', options: weights },
	},
}

export default meta

type TextStoryProps = ComponentProps<typeof Text.Display> &
	ComponentProps<typeof Text.Heading> &
	ComponentProps<typeof Text.Title> &
	ComponentProps<typeof Text.Label> &
	ComponentProps<typeof Text.Body> & {
		componentName: keyof typeof Text
	}

// eslint-disable-next-line react/prop-types
const Template: Story<TextStoryProps> = ({ componentName, ...args }) => {
	const Component = Text[componentName] || Text.Body
	return <Component {...args} />
}

export const Display = Template.bind({})
Display.args = {
	componentName: 'Display',
	children: 'Display Text',
	as: 'h1',
}

export const Heading = Template.bind({})
Heading.args = {
	componentName: 'Heading',
	children: 'Heading Text',
	as: 'h2',
}

export const Title = Template.bind({})
Title.args = {
	componentName: 'Title',
	children: 'Title Text',
	weight: 'semibold',
	as: 'h2',
}

export const Label = Template.bind({})
Label.args = {
	componentName: 'Label',
	children: 'Label Text',
	weight: 'semibold',
	as: 'label',
}

export const Body = Template.bind({})
Body.args = {
	componentName: 'Body',
	children: 'Body Text',
	as: 'p',
}