import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyInput } from '@web/components';

const meta: Meta<typeof CurrencyInput> = {
	title: 'Components/CurrencyInput',
	component: CurrencyInput,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
	args: {
		label: 'I can donate',
		placeholder: '0.00',
		id: 'storybook-component',
	},
	render: function Render(args) {
		const [currencyValue, setCurrencyValue] = useState<string>('');

		return (
			<>
				<CurrencyInput
					{...args}
					value={currencyValue}
					onChange={(value: string) => setCurrencyValue(value)}
				/>
			</>
		);
	},
};
