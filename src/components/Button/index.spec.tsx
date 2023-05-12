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

	describe('Styles', () => {
		it('should have base styles', () => {
			render(<Button>Click me</Button>);
			const button = screen.getByRole('button');

			const baseStyles = [
				'inline-flex',
				'shrink-0',
				'items-center',
				'justify-center',
				'text-center',
				'flex-nowrap',
				'whitespace-nowrap',
				'font-sans',
				'text-base',
				'leading-none',
				'font-medium',
				'select-none',
				'cursor-pointer',
				'border',
				'rounded',
				'transition-all',
				'duration-300',
				'no-underline',
				'outline-none',
				'outline-offset-0',
				'active:transition-none',
			];

			baseStyles.forEach((className) => {
				expect(button).toHaveClass(className);
			});
		});

		it('should be primary, filled and md size as default', () => {
			render(<Button>Click me</Button>);
			const button = screen.getByRole('button');

			const defaultStyles = [
				'h-12',
				'px-6',
				'gap-2',
				'text-white',
				'bg-primary-500',
				'shadow-sm',
				'hover:bg-primary-600',
				'focus:ring-2',
				'focus:ring-primary-300/95',
				'active:bg-primary-600/90',
				'active:ring',
				'active:shadow-none',
			];

			defaultStyles.forEach((className) => {
				expect(button).toHaveClass(className);
			});
		});

		it('should change color styles with "color" prop', () => {
			render(<Button color="red">Click me</Button>);
			const button = screen.getByRole('button');

			const colorStyles = [
				'bg-red-500',
				'hover:bg-red-600',
				'focus:ring-red-300/95',
				'active:bg-red-600/90',
			];

			colorStyles.forEach((className) => {
				expect(button).toHaveClass(className);
			});
		});

		it('should change size styles with "size" prop', () => {
			render(<Button size="xl">Click me</Button>);
			const button = screen.getByRole('button');

			const sizeStyles = ['h-16', 'px-7', 'text-xl', 'gap-3'];

			sizeStyles.forEach((className) => {
				expect(button).toHaveClass(className);
			});
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

		it('should call onKeyDown when key is pressed even its other element', () => {
			const onKeyDown = vi.fn();
			render(
				<Button asSlot onKeyDown={onKeyDown}>
					<a>Click me</a>
				</Button>
			);
			const button = screen.getByText('Click me');

			fireEvent.keyDown(button, { key: 'Enter' });
			fireEvent.keyDown(button, { key: ' ' });
			expect(onKeyDown).toHaveBeenCalledTimes(2);
		});
	});
});
