import Select from '.';

export default {
	title: 'Components/Select',
	component: Select,
};

const options = [
	{ label: 'option 1', value: 1, active: true },
	{ label: 'option 2', value: 2, active: true },
	{ label: 'option 3', value: 3, active: false },
	{ label: 'option 4', value: 5, active: true },
	{ label: 'option 5', value: 5, active: true },
	{ label: 'option 6', value: 6, active: false },
];

export const Default = () => <Select label="Select Example" options={options} />;

export const Multiple = () => <Select label="Multiple Select Example" options={options} multiple />;

export const ErroState = () => (
	<Select label="Multiple Select Example" options={options} error="Please select an valid option" />
);
