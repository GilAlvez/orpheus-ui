import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Text } from '.';

function testTextComponent(componentName: string, Component: any) {
	describe(componentName, () => {
		let textElement: ChildNode | null;

		function renderTextComponent({
			size,
			weight,
		}: {
			size?: string;
			weight?: string;
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

		it('should have the correct default prop in `size`', () => {
			expect(textElement).toHaveAttribute('class', expect.stringContaining('size-md'));
		});

		it('should have the correct `size` value when prop is declared', () => {
			textElement = renderTextComponent({ size: 'lg' });

			expect(textElement).toHaveAttribute('class', expect.stringContaining('size-lg'));
		});

		it('should have the correct default prop in `weight`', () => {
			expect(textElement).toHaveAttribute('class', expect.stringContaining('weight-normal'));
		});

		it('should have the correct `weight` value when prop is declared', () => {
			textElement = renderTextComponent({ weight: 'bold' });

			expect(textElement).toHaveAttribute('class', expect.stringContaining('weight-bold'));
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
