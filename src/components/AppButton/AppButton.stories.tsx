import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
	title: 'Components/Buttons/AppButton',
	component: AppButton,
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Label',
	},
};
