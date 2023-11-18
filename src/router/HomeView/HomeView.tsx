import { Box, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { visuallyHidden } from '@mui/utils';
import { useState } from 'react';
import { AppButton } from '@web/components';
import { DonationDialog } from './components/DonationDialog/DonationDialog';

export const HomeView = () => {
	const { formatMessage } = useIntl();
	const [isDialogOpen, setIsDialogOpen] = useState(true);

	return (
		<>
			<Box>
				<Typography variant="h1" sx={visuallyHidden}>
					{formatMessage({ id: 'app.title' })}
				</Typography>
				<AppButton onClick={() => setIsDialogOpen(true)}>
					{formatMessage({ id: 'open_dialog_button.label' })}
				</AppButton>
			</Box>
			<DonationDialog open={isDialogOpen} handleClose={() => setIsDialogOpen(false)} />
		</>
	);
};
