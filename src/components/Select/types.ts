export interface SelectProps {
	label?: string;
	options: Array<{ value: string | number; label: string; active?: boolean }>;
	size?: 'sm' | 'md' | 'lg';
	error?: string;
	disabled?: boolean;
	isSearchable?: boolean;
	multiple?: boolean;
	name?: string;
	value?: any;
	placeholders?: {
		singleSelect?: string;
		multipleSelect?: string;
		outRangeSelect?: string;
		searchInput?: string;
	};
	defaultValue?: any;
	onChange?: (value: any) => void;
}
