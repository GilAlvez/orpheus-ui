import { Listbox } from '@headlessui/react';
import { forwardRef, useEffect, useState, type ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import * as S from './styles';
import { type SelectProps } from './types';

const Select = forwardRef<HTMLElement, SelectProps>(
	(
		{
			options,
			label,
			error,
			multiple,
			isSearchable,

			size = 'md',
			placeholders = {
				searchInput: 'Search here',
				multipleSelect: 'Select one or more options',
				singleSelect: 'Select an option',
				outRangeSelect: 'Options selected:',
			},
			...rest
		},
		ref
	) => {
		const [searchValue, setSearchValue] = useState('');
		const [filteredOptions, setFilteredOptions] = useState(options);

		useEffect(() => {
			setFilteredOptions(
				options?.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()))
			);
		}, [options, searchValue]);

		const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

		return (
			<Listbox as="div" className="relative" ref={ref} multiple={multiple} {...rest}>
				{label && (
					<Listbox.Label className={twMerge(S.baseStyles.label, !!error && S.errorState.label)}>
						{label}
					</Listbox.Label>
				)}

				<Listbox.Button
					className={twMerge(S.baseStyles.select, S.sizes[size], !!error && S.errorState.input)}
				>
					{({ value }) => {
						if (!multiple || !value) {
							return value ? value.label : placeholders?.singleSelect;
						}

						if (Array.isArray(value)) {
							if (value.length === 0) {
								return placeholders?.multipleSelect;
							} else if (value.length <= 3) {
								return value.map((val) => val.label).join(', ');
							} else {
								return `${placeholders?.outRangeSelect} ${value.length} `;
							}
						}
					}}
				</Listbox.Button>

				<Listbox.Options className={twMerge(S.baseStyles.listbox)}>
					{isSearchable && (
						<input
							type="text"
							placeholder={placeholders?.searchInput}
							className={twMerge(S.searchInput.input)}
							value={searchValue}
							onChange={handleSearchChange}
						/>
					)}

					{filteredOptions?.map((option) => (
						<Listbox.Option
							key={option.value}
							value={option}
							disabled={!option.active}
							className={twMerge(S.baseStyles.option)}
						>
							{option.label}
						</Listbox.Option>
					))}
				</Listbox.Options>

				{error && <div className={S.baseStyles.error}>{error}</div>}
			</Listbox>
		);
	}
);

Select.displayName = 'Select';

export default Select;
