import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
	title: 'Components/Buttons/AppButton',
	component: AppButton,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Label',
		variant: 'contained',
	},
};

export const Secondary: Story = {
	args: {
		color: 'primary',
		children: 'Label',
		variant: 'outlined',
	},
};
