import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { Text } from '.';
import { textBase } from './styles';

function testTextComponent(componentName: string, Component: any) {
	describe(componentName, () => {
		let textElement: ChildNode | null;

		function renderTextComponent({ size, weight }: { size?: string; weight?: string }): ChildNode | null {
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

		test('should render with correct text content', () => {
			// Assert
			expect(textElement).toHaveTextContent(componentName);
		});

		test('should have the correct base className', () => {
			// Arrange
			const textHTMLElement = textElement as HTMLElement;

			// Assert
			expect(textHTMLElement.classList.contains(textBase.className)).toBeTruthy();
		});

		test('should have the correct default prop in `size`', () => {
			// Assert
			expect(textElement).toHaveAttribute('class', expect.stringContaining('size-md'));
		});

		test('should have the correct `size` value when prop is declared', () => {
			// Arrange
			textElement = renderTextComponent({ size: 'lg' });

			// Assert
			expect(textElement).toHaveAttribute('class', expect.stringContaining('size-lg'));
		});

		test('should have the correct default prop in `weight`', () => {
			// Assert
			expect(textElement).toHaveAttribute('class', expect.stringContaining('weight-normal'));
		});

		test('should have the correct `weight` value when prop is declared', () => {
			// Arrange
			textElement = renderTextComponent({ weight: 'bold' });

			// Assert
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
