import { type Meta, type StoryFn } from '@storybook/react';
import { Text, type ITextProps } from '.';

interface TextStoryArgs extends ITextProps {
	componentName: keyof typeof Text;
}

type TextStoryProps = ITextProps & {
	componentName: keyof typeof Text;
};

const sizes = ['lg', 'md', 'sm'];
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export default {
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
		weight: 400,
	},
	argTypes: {
		componentName: { table: { disable: true } },
		children: { control: 'text' },
		as: { control: 'text' },
		size: { control: 'inline-radio', options: sizes },
		weight: { control: 'inline-radio', options: weights },
	},
} as Meta<TextStoryArgs>;

// eslint-disable-next-line react/prop-types
const Template: StoryFn<TextStoryProps> = ({ componentName, ...args }) => {
	const Component = Text[componentName] || Text.Body;
	return <Component {...args} />;
};

export const Display = Template.bind({});
Display.args = {
	componentName: 'Display',
	children: 'Display Text',
	as: 'h1',
};

export const Heading = Template.bind({});
Heading.args = {
	componentName: 'Heading',
	children: 'Heading Text',
	as: 'h2',
};

export const Title = Template.bind({});
Title.args = {
	componentName: 'Title',
	children: 'Title Text',
	weight: 500,
	as: 'h2',
};

export const Label = Template.bind({});
Label.args = {
	componentName: 'Label',
	children: 'Label Text',
	weight: 500,
	as: 'label',
};

export const Body = Template.bind({});
Body.args = {
	componentName: 'Body',
	children: 'Body Text',
	as: 'p',
};
