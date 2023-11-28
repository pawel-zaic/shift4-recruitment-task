import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ComplexCurrencyInput } from '@web/components';

const meta: Meta<typeof ComplexCurrencyInput> = {
	title: 'Components/ComplexCurrencyInput',
	component: ComplexCurrencyInput,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComplexCurrencyInput>;

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
				<ComplexCurrencyInput
					{...args}
					valueValue={currencyValue}
					valueOnChange={(value: string) => setCurrencyValue(value)}
				/>
			</>
		);
	},
};
