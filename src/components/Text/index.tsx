import { type ElementType, type HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import * as S from './styles';

export interface ITextProps extends HTMLAttributes<HTMLElement> {
	as?: ElementType;
	size?: keyof typeof S.typographScheme.heading;
	weight?: keyof typeof S.weights;
}

const createTextComponent = (
	type: keyof typeof S.typographScheme,
	defaultElement: ElementType,
	defaultWeight: keyof typeof S.weights
) => {
	const TextComponent = ({
		as = defaultElement,
		size = 'md',
		weight = defaultWeight,
		className,
		children,
		...props
	}: ITextProps) => {
		const Element = as;

		return (
			<Element
				className={twMerge(
					S.baseStyles,
					S.typographScheme[type][size],
					S.weights[weight],
					className
				)}
				{...props}
			>
				{children}
			</Element>
		);
	};

	return TextComponent;
};

const Display = createTextComponent('display', 'h1', 400);
const Heading = createTextComponent('heading', 'h2', 400);
const Title = createTextComponent('title', 'h2', 500);
const Label = createTextComponent('label', 'label', 500);
const Body = createTextComponent('body', 'p', 400);

export const Text = { Display, Heading, Title, Label, Body };
