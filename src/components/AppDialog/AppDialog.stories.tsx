import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { AppDialog } from '@web/components';
import { Box, Typography } from '@mui/material';
import { GivingBlockIcon } from '@web/assets';
import { theme } from '@web/lib';

const meta: Meta<typeof AppDialog> = {
	title: 'Components/AppDialog',
	component: AppDialog,
};

export default meta;

type Story = StoryObj<typeof AppDialog>;

export const Default: Story = {
	args: {
		open: false,
		title: 'Lorem ipsum',
	},
	render: function Render(args) {
		const [{ open }, updateArgs] = useArgs();

		const handleClose = () => {
			updateArgs({ open: false });
		};

		return (
			<AppDialog
				handleClose={handleClose}
				{...args}
				triggerArea={
					<>
						<GivingBlockIcon
							fill={theme.palette.midnightPurple.main}
							width={60}
						/>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant="h2">The giving block</Typography>
							<Typography variant="body1">
								Set up your donation goal!
							</Typography>
						</Box>
					</>
				}
			>
				<div>Lorem ipsum</div>
			</AppDialog>
		);
	},
};
