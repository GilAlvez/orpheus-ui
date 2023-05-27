import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TextField } from '.';

describe('TextField', () => {
	it('should change the input value when typing', () => {
		render(<TextField />);
		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: 'Hello' } });
		expect(input).toHaveValue('Hello');
	});

	it('should call onChange when input value is changed', () => {
		const onChange = vi.fn();
		render(<TextField onChange={onChange} />);
		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: 'Hello' } });
		expect(input).toHaveValue('Hello');
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it('should call onKeyDown when key is pressed', () => {
		const onKeyDown = vi.fn();
		render(<TextField onKeyDown={onKeyDown} />);
		const input = screen.getByRole('textbox');

		fireEvent.keyDown(input, { key: 'Enter' });
		expect(onKeyDown).toHaveBeenCalledTimes(1);
	});
});
