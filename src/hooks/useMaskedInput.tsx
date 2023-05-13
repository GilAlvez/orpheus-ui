import { useState, type ChangeEvent } from 'react';

interface MaskInputProps {
	mask?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const isCharValidForMask = (char: string, maskChar: string): boolean => {
	if (maskChar === '9') {
		return /\d/.test(char);
	}
	if (maskChar === 'a') {
		return /[a-zA-Z]/.test(char);
	}
	if (maskChar === '*') {
		return true;
	}
	return char === maskChar;
};

export const useMaskedInput = ({ mask, onChange }: MaskInputProps) => {
	const [maskedValue, setValue] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;

		if (mask && inputValue.length >= mask.length + 1) return;

		if (mask) {
			const maskChar = mask[inputValue.length - 1];
			const inputChar = inputValue[inputValue.length - 1];

			if (maskChar === '9' || maskChar === 'a' || maskChar === '*') {
				if (!isCharValidForMask(inputChar, maskChar)) return;
			} else {
				if (inputChar !== maskChar) {
					setValue(`${maskedValue}${maskChar}`);
					return;
				}
			}
		}

		setValue(inputValue);

		if (onChange) {
			onChange({ ...event, target: { ...event.target, value: inputValue } });
		}
	};

	return { maskedValue, handleChange };
};
