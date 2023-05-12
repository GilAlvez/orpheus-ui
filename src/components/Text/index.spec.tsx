import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Text } from '.';
import type * as S from './styles';

function testTextComponent(componentName: string, Component: any) {
	describe(componentName, () => {
		let textElement: ChildNode | null;

		function renderTextComponent({
			size,
			weight,
		}: {
			size?: keyof typeof S.typographScheme.heading;
			weight?: keyof typeof S.weights;
		}): ChildNode | null {
			const { container } = render(
				<Component size={size} weight={weight}>
					{componentName}
				</Component>
			);
			const textElement = container.firstChild;
			return textElement;
		}
		beforeEach(() => {
			textElement = renderTextComponent({});
		});

		it('should render with correct text content', () => {
			expect(textElement).toHaveTextContent(componentName);
		});

		it('should have base styles', () => {
			const baseStyles = ['font-sans', 'text-inherit'];

			baseStyles.forEach((className) => {
				expect(textElement).toHaveClass(className);
			});
		});

		it('should have default weight to 400 or 500', () => {
			const type = textElement?.textContent;

			if (type === 'Display' || type === 'Heading' || type === 'Body') {
				expect(textElement).toHaveClass('font-normal'); // 400
			}
			if (type === 'Title' || type === 'Label') {
				expect(textElement).toHaveClass('font-medium'); // 500
			}
		});

		it('should have the correct font-weight when "weight" prop is used', () => {
			textElement = renderTextComponent({ weight: 100 });
			expect(textElement).toHaveClass('font-thin');
			textElement = renderTextComponent({ weight: 200 });
			expect(textElement).toHaveClass('font-extralight');
			textElement = renderTextComponent({ weight: 300 });
			expect(textElement).toHaveClass('font-light');
			textElement = renderTextComponent({ weight: 400 });
			expect(textElement).toHaveClass('font-normal');
			textElement = renderTextComponent({ weight: 500 });
			expect(textElement).toHaveClass('font-medium');
			textElement = renderTextComponent({ weight: 600 });
			expect(textElement).toHaveClass('font-semibold');
			textElement = renderTextComponent({ weight: 700 });
			expect(textElement).toHaveClass('font-bold');
			textElement = renderTextComponent({ weight: 800 });
			expect(textElement).toHaveClass('font-extrabold');
			textElement = renderTextComponent({ weight: 900 });
			expect(textElement).toHaveClass('font-black');
		});

		it('should have the correct font-size based on type and "size" prop', () => {
			const type = textElement?.textContent;

			if (type === 'Display') {
				textElement = renderTextComponent({ size: 'lg' });
				expect(textElement).toHaveClass('text-7xl');
				textElement = renderTextComponent({ size: 'md' });
				expect(textElement).toHaveClass('text-6xl');
				textElement = renderTextComponent({ size: 'sm' });
				expect(textElement).toHaveClass('text-5xl');
			}

			if (type === 'Heading') {
				textElement = renderTextComponent({ size: 'lg' });
				expect(textElement).toHaveClass('text-4xl');
				textElement = renderTextComponent({ size: 'md' });
				expect(textElement).toHaveClass('text-3xl');
				textElement = renderTextComponent({ size: 'sm' });
				expect(textElement).toHaveClass('text-2xl');
			}

			if (type === 'Title') {
				textElement = renderTextComponent({ size: 'lg' });
				expect(textElement).toHaveClass('text-2xl');
				textElement = renderTextComponent({ size: 'md' });
				expect(textElement).toHaveClass('text-xl');
				textElement = renderTextComponent({ size: 'sm' });
				expect(textElement).toHaveClass('text-lg');
			}

			if (type === 'Label') {
				textElement = renderTextComponent({ size: 'lg' });
				expect(textElement).toHaveClass('text-base');
				textElement = renderTextComponent({ size: 'md' });
				expect(textElement).toHaveClass('text-sm');
				textElement = renderTextComponent({ size: 'sm' });
				expect(textElement).toHaveClass('text-xs');
			}

			if (type === 'Body') {
				textElement = renderTextComponent({ size: 'lg' });
				expect(textElement).toHaveClass('text-lg');
				textElement = renderTextComponent({ size: 'md' });
				expect(textElement).toHaveClass('text-base');
				textElement = renderTextComponent({ size: 'sm' });
				expect(textElement).toHaveClass('text-sm');
			}
		});
	});
}

describe('Text', () => {
	testTextComponent('Display', Text.Display);
	testTextComponent('Heading', Text.Heading);
	testTextComponent('Title', Text.Title);
	testTextComponent('Label', Text.Label);
	testTextComponent('Body', Text.Body);
});
