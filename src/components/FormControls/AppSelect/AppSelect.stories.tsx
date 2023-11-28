import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AppSelect } from '@web/components';
import { Box } from '@mui/material';

const meta: Meta<typeof AppSelect> = {
	title: 'Components/FormControls/AppSelect',
	component: AppSelect,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppSelect>;

export const Default: Story = {
	args: {
		label: 'Select label',
		placeholder: 'Select value',
		key: 'test-storybook',
		options: [
			{ value: 'key1', label: 'value1' },
			{ value: 'key2', label: 'value2' },
			{ value: 'key3', label: 'value3' },
		],
	},
	render: function Render(args) {
		const [value, setValue] = useState(args.value || '');
		return (
			<Box sx={{ width: 400 }}>
				<p>Selected state value: {`${value || 'none'}`}</p>
				<AppSelect
					{...args}
					value={value}
					onChange={(value) => {
						setValue(value.target.value as string);
					}}
				/>
			</Box>
		);
	},
};

export const Focused: Story = {
	args: {
		...Default.args,
		focused: true,
	},
	render: Default.render,
};

export const WithValue: Story = {
	args: {
		...Default.args,
		value: 'key1',
	},
	render: Default.render,
};
