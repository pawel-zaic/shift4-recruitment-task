import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyInput } from '@web/components';
import { useState } from 'react';

const meta: Meta<typeof CurrencyInput> = {
	title: 'Components/CurrencyInput',
	component: CurrencyInput,
};

export default meta;

type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
	args: {
		name: 'Name',
		label: 'I can donate',
		placeholder: '0.00',
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
