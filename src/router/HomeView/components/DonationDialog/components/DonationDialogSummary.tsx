import { useIntl, FormattedNumber } from 'react-intl';

import { Box as MuiBox, BoxProps as MuiBoxProps, Typography as MuiTypography } from '@mui/material';

import { theme } from '@web/lib';

export type DonationDialogSummaryProps = MuiBoxProps & {
	amount: number;
	month: Date;
	summaryData: {
		totalAmount: number;
		lastMonth: string;
	};
};

export const DonationDialogSummary = ({ amount, summaryData, sx }: DonationDialogSummaryProps) => {
	const { formatMessage } = useIntl();

	return (
		<MuiBox
			sx={{
				...sx,
				display: 'flex',
				flexDirection: 'column',
				border: `1px solid ${theme.palette.blueGray.light}`,
				borderRadius: theme.spacing(1),

				[theme.breakpoints.up('sm')]: {
					border: 'none',
					gap: theme.spacing(6),
				},
			}}
		>
			<MuiBox
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: theme.spacing(6, 4),

					[theme.breakpoints.up('sm')]: {
						padding: theme.spacing(0, 4),
					},
				}}
			>
				<MuiTypography
					component="span"
					sx={{
						fontFamily: '"Work Sans", Inter',
						fontWeight: theme.typography.fontWeightMedium,
						fontSize: theme.spacing(4),
						color: theme.palette.blueGray.main,

						[theme.breakpoints.up('sm')]: {
							fontSize: theme.spacing(5),
						},
					}}
				>
					{formatMessage({ id: 'donation_dialog.total_amount' })}
				</MuiTypography>
				<MuiTypography
					component="span"
					sx={{
						fontWeight: 700,
						fontSize: theme.spacing(6),
						color: theme.palette.purpleGray.main,
						overflowX: 'hidden',
						textOverflow: 'ellipsis',

						[theme.breakpoints.up('sm')]: {
							fontSize: theme.spacing(8),
						},
					}}
				>
					<FormattedNumber
						value={summaryData.totalAmount}
						style="currency"
						currency="USD"
						minimumFractionDigits={0}
					/>
				</MuiTypography>
			</MuiBox>
			<MuiBox
				sx={{
					backgroundColor: theme.palette.backgroundGray.main,
					padding: theme.spacing(6, 4),
					borderRadius: theme.spacing(1),
				}}
			>
				<MuiTypography
					sx={{
						fontFamily: '"Work Sans", Inter',
						fontSize: theme.spacing(3),
						color: theme.palette.blueGray.main,
						textAlign: 'center',
						[theme.breakpoints.up('sm')]: {
							textAlign: 'start',
						},
					}}
				>
					{formatMessage(
						{ id: 'donation_dialog.summary' },
						{
							name: (
								<MuiTypography
									component="span"
									sx={{
										fontFamily: 'Inter',
										fontWeight: 700,
										fontSize: theme.spacing(3),
										color: theme.palette.blueGray.main,
									}}
								>
									<FormattedNumber
										value={amount}
										style="currency"
										currency="USD"
										minimumFractionDigits={0}
									/>
								</MuiTypography>
							),
							date: (
								<MuiTypography
									component="span"
									sx={{
										fontFamily: 'Inter',
										fontWeight: 700,
										fontSize: theme.spacing(3),
										color: theme.palette.blueGray.main,
									}}
								>
									{summaryData.lastMonth}
								</MuiTypography>
							),
						},
					)}
				</MuiTypography>
			</MuiBox>
		</MuiBox>
	);
};
