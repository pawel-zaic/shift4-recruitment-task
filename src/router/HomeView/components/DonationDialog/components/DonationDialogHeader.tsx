import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import { GivingBlockIcon } from '@web/assets';
import { theme } from '@web/lib';
import { useIntl } from 'react-intl';

export const DonationDialogHeader = () => {
	const { formatMessage } = useIntl();

	return (
		<>
			<GivingBlockIcon fill={theme.palette.midnightPurple.main} width={60} />
			<MuiBox
				sx={{
					display: 'flex',
					flexDirection: 'column',
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
