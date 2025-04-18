import { useIntl } from 'react-intl';

import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';

import { GivingBlockIcon } from '@web/assets';
import { theme } from '@web/lib';

export const DonationDialogHeader = () => {
	const { formatMessage } = useIntl();

	return (
		<>
			<GivingBlockIcon
				sx={{
					fill: theme.palette.midnightPurple.main,
					width: 72,
					height: 'auto',
				}}
			/>
			<MuiBox
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: theme.spacing(1),
				}}
			>
				<MuiTypography variant="h2">{formatMessage({ id: 'donation_dialog.title' })}</MuiTypography>
				<MuiTypography variant="body1">
					{formatMessage({ id: 'donation_dialog.subtitle' })}
				</MuiTypography>
			</MuiBox>
		</>
	);
};
