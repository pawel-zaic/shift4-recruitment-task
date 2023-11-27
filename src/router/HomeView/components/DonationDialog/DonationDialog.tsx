import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useForm, Controller } from 'react-hook-form';
import { differenceInCalendarMonths, format } from 'date-fns';

import { Box as MuiBox, useMediaQuery } from '@mui/material';

import {
	AppButton,
	AppDialog,
	AppDialogProps,
	AppSelect,
	CurrencyInput,
	MonthPicker,
} from '@web/components';
import { theme } from '@web/lib';
import { StyledDialogActions } from '@web/components/AppDialog/AppDialog.styled';
import { useCurrency } from '@web/utils';
import { OCurrencyName, OCurrencyType } from '@web/types';

import { DonationDialogHeader } from './components/DonationDialogHeader';
import {
	DonationDialogSummary,
	DonationDialogSummaryProps,
} from './components/DonationDialogSummary';
import { StyledFormFields, StyledFormRow } from './DonationDialog.styled';

type DonationDialogProps = AppDialogProps;
type DonationForm = {
	date: Date;
	value: string;
	currency: OCurrencyType;
};

export const DonationDialog = ({ handleClose, ...props }: DonationDialogProps) => {
	const { formatMessage } = useIntl();
	const { parseCurrencyToNumber } = useCurrency();

	const { handleSubmit, control, watch, reset } = useForm<DonationForm>({
		defaultValues: {
			date: new Date(),
			value: '',
			currency: 'usd',
		},
	});

	const amount = parseCurrencyToNumber(watch('value', '0'));
	const month = watch('date');
	const currency = watch('currency');

	const currencyKeys: OCurrencyType[] = ['usd', 'gbp', 'eur', 'btc', 'jpy'];

	const summaryData = useMemo(
		(): DonationDialogSummaryProps['summaryData'] => ({
			totalAmount: amount * differenceInCalendarMonths(month, new Date()),
			lastMonth: format(month, 'MMMM yyyy'),
		}),
		[month, amount],
	);

	return (
		<AppDialog handleClose={handleClose} triggerArea={<DonationDialogHeader />} {...props}>
			<MuiBox component="form">
				<StyledFormFields>
					<StyledFormRow>
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
									currency={currency}
								/>
							)}
						/>
						<Controller
							name="currency"
							control={control}
							render={({ field: { onChange, value, name } }) => (
								<AppSelect
									value={value}
									options={currencyKeys.map((key) => ({
										label: OCurrencyName[key as keyof typeof OCurrencyName],
										value: key,
									}))}
									label="In currency"
									onChange={onChange}
									id={name}
								/>
							)}
						/>
					</StyledFormRow>

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
					summaryData={summaryData}
					currency={currency}
					sx={{
						marginTop: theme.spacing(10),
						marginBottom: theme.spacing(8),
						[theme.breakpoints.up('sm')]: {
							marginTop: theme.spacing(8),
						},
					}}
				/>
				<StyledDialogActions
					sx={{
						margin: theme.spacing(0, 2),
						[theme.breakpoints.up('sm')]: {
							margin: 0,
						},
					}}
				>
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
							const submitData = {
								monthlyAmount: parseCurrencyToNumber(data.value),
								lastMonth: format(month, 'MMMM yyyy'),
							};

							console.log(submitData);

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
