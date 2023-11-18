import { AppButton, AppDialog, AppDialogProps, CurrencyInput, MonthPicker } from '@web/components';
import { Box as MuiBox, useMediaQuery } from '@mui/material';
import { useIntl } from 'react-intl';
import { theme } from '@web/lib';
import { StyledDialogActions } from '@web/components/AppDialog/AppDialog.styled';
import { useForm, Controller } from 'react-hook-form';
import { useMemo } from 'react';
import { differenceInCalendarMonths, format } from 'date-fns';
import { DonationDialogHeader } from './components/DonationDialogHeader';
import { StyledFormFields } from './DonationDialog.styled';
import {
	DonationDialogSummary,
	DonationDialogSummaryProps,
} from './components/DonationDialogSummary';

type DonationDialogProps = AppDialogProps;
type DonationForm = {
	date: Date;
	value: string;
};

export const DonationDialog = ({ handleClose, ...props }: DonationDialogProps) => {
	const { formatMessage } = useIntl();

	const { handleSubmit, control, watch, reset } = useForm<DonationForm>({
		defaultValues: {
			date: new Date(),
			value: '',
		},
	});

	const amount = watch('value', '0');
	const month = watch('date');

	const submitData = useMemo(
		(): DonationDialogSummaryProps['submitData'] => ({
			totalAmount: +amount * (differenceInCalendarMonths(month, new Date()) + 1),
			lastMonth: format(month, 'MMMM yyyy'),
		}),
		[month, amount],
	);

	return (
		<AppDialog handleClose={handleClose} triggerArea={<DonationDialogHeader />} {...props}>
			<MuiBox component="form">
				<StyledFormFields>
					<Controller
						name="value"
						control={control}
						render={({ field: { onChange, value, name } }) => (
							<CurrencyInput
								value={value}
								id={name}
								onChange={onChange}
								label={formatMessage({ id: 'donation_dialog.money_input.label' })}
								placeholder={formatMessage({ id: 'donation_dialog.money_input.placeholder' })}
							/>
						)}
					/>
					<Controller
						name="date"
						control={control}
						render={({ field: { onChange, value, name } }) => (
							<MonthPicker
								label={formatMessage({ id: 'donation_dialog.date_input.label' })}
								value={value}
								id={name}
								onChange={onChange}
							/>
						)}
					/>
				</StyledFormFields>
				<DonationDialogSummary
					amount={amount}
					month={month}
					submitData={submitData}
					sx={{
						marginTop: theme.spacing(10),
						marginBottom: theme.spacing(8),
						[theme.breakpoints.up('sm')]: {
							marginTop: theme.spacing(8),
						},
					}}
				/>
				<StyledDialogActions>
					{useMediaQuery(theme.breakpoints.up('sm')) && (
						<AppButton
							fullWidth
							aria-label={formatMessage({ id: 'donation_dialog.cancel_button.label' })}
							variant="outlined"
							onClick={handleClose}
						>
							{formatMessage({ id: 'donation_dialog.cancel_button.label' })}
						</AppButton>
					)}
					<AppButton
						fullWidth
						aria-label={formatMessage({ id: 'donation_dialog.submit_button.label' })}
						onClick={handleSubmit((data) => {
							console.log(data);
							handleClose && handleClose();
							reset();
						})}
						type="submit"
					>
						{formatMessage({ id: 'donation_dialog.submit_button.label' })}
					</AppButton>
				</StyledDialogActions>
			</MuiBox>
		</AppDialog>
	);
};
