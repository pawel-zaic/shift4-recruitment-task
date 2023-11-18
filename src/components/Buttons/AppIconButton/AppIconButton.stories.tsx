import type { Meta, StoryObj } from '@storybook/react';

import { ChevronLeftIcon } from '@web/assets';
import { theme } from '@web/lib';

import { AppIconButton } from './AppIconButton';

const meta: Meta<typeof AppIconButton> = {
	title: 'Components/Buttons/AppIconButton',
	component: AppIconButton,
};

export default meta;

type Story = StoryObj<typeof AppIconButton>;

export const Default: Story = {
	args: {
		children: <ChevronLeftIcon sx={{ height: theme.spacing(6) }} />,
	},
};
