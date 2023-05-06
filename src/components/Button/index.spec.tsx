import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '.';

describe('Button', () => {
	describe('Base', () => {
		it('should render the button with the correct content', () => {
			render(<Button>Click me</Button>);
			const button = screen.getByRole('button');

			expect(button).toBeInTheDocument();
			expect(button).toHaveTextContent('Click me');
		});

		it('should render a disabled button', () => {
			render(<Button disabled>Click me</Button>);
			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
		});

		it('should call onClick when the button is clicked', () => {
			const onClick = vi.fn();
			render(<Button onClick={onClick}>Click me</Button>);
			const button = screen.getByRole('button');

			fireEvent.click(button);
			expect(onClick).toHaveBeenCalledTimes(1);
		});
		it('should not call onClick when the disabled button is clicked', () => {
			const onClick = vi.fn();
			render(
				<Button disabled onClick={onClick}>
					Click me
				</Button>
			);
			const button = screen.getByRole('button');

			fireEvent.click(button);
			expect(onClick).toHaveBeenCalledTimes(0);
		});
	});

	describe('Polymorphism', () => {
		it('should render button tag when "as" isnt declared', () => {
			render(<Button>Click me</Button>);
			const linkButton = screen.getByText('Click me');

			expect(linkButton.tagName.toLowerCase()).toBe('button');
		});
		it('should render correct tag when "as" is declared', () => {
			render(<Button as="a">Click me</Button>);
			const linkButton = screen.getByText('Click me');

			expect(linkButton.tagName.toLowerCase()).toBe('a');
		});
	});

	describe('Accessibility', () => {
		it('should call onKeyDown when key is pressed', () => {
			const onKeyDown = vi.fn();
			render(<Button onKeyDown={onKeyDown}>Click me</Button>);
			const button = screen.getByRole('button');

			fireEvent.keyDown(button, { key: 'Enter' });
			fireEvent.keyDown(button, { key: ' ' });
			expect(onKeyDown).toHaveBeenCalledTimes(2);
		});

		it('should call onKeyDown even it isnt a button tag', () => {
			const onKeyDown = vi.fn();
			render(
				<Button as="a" onKeyDown={onKeyDown}>
					Click me
				</Button>
			);
			const button = screen.getByText('Click me');

			fireEvent.keyDown(button, { key: 'Enter' });
			fireEvent.keyDown(button, { key: ' ' });
			expect(onKeyDown).toHaveBeenCalledTimes(2);
		});
	});

	describe('Icon', () => {
		it('should render with an icon if provided', () => {
			render(<Button icon={<svg data-testid="icon-svg" />}>Click me</Button>);
			const icon = screen.getByTestId('icon-svg');
			expect(icon).toBeInTheDocument();
		});
	});
});
