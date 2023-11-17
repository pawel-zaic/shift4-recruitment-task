import type { Meta, StoryObj } from '@storybook/react';

import { AppCloseButton } from './AppCloseButton';

const meta: Meta<typeof AppCloseButton> = {
	title: 'Components/Buttons/AppCloseButton',
	component: AppCloseButton,
};

export default meta;

type Story = StoryObj<typeof AppCloseButton>;

export const Primary: Story = {};
