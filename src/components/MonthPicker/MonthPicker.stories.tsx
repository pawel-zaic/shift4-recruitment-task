import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { MonthPicker } from '@web/components';

const meta: Meta<typeof MonthPicker> = {
	title: 'Components/MonthPicker',
	component: MonthPicker,
};

export default meta;

type Story = StoryObj<typeof MonthPicker>;

export const Default: Story = {
	args: {
		label: 'Every month until',
		id: 'storybook-component',
	},
	render: function Render(args) {
		const [currentDate, setCurrentDate] = useState(new Date());

		return (
			<MonthPicker
				{...args}
				value={currentDate}
				onChange={(value) => setCurrentDate(value)}
			></MonthPicker>
		);
	},
};
