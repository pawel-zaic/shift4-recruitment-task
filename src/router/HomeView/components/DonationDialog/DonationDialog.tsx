import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useForm, Controller, useController } from 'react-hook-form';
import { differenceInCalendarMonths, format } from 'date-fns';

import { Box as MuiBox, useMediaQuery } from '@mui/material';

import {
	AppButton,
	AppDialog,
	AppDialogProps,
	ComplexCurrencyInput,
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
import { StyledFormFields } from './DonationDialog.styled';

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

	const {
		field: { onChange: valueOnChange, value: valueValue, name: valueName },
	} = useController({ name: 'value', control, defaultValue: '' });
	const {
		field: { onChange: currencyOnChange, value: currencyValue, name: currencyName },
	} = useController({ name: 'currency', control, defaultValue: 'usd' });

	const amount = parseCurrencyToNumber(watch('value', '0'));
	const month = watch('date');
	const currency = watch('currency');

	const summaryData = useMemo(
		(): DonationDialogSummaryProps['summaryData'] => ({
			totalAmount: amount * differenceInCalendarMonths(month, new Date()),
			lastMonth: format(month, 'MMMM yyyy'),
		}),
		[month, amount, currency],
	);

	return (
		<AppDialog handleClose={handleClose} triggerArea={<DonationDialogHeader />} {...props}>
			<MuiBox component="form">
				<StyledFormFields>
					<ComplexCurrencyInput
						valueName={valueName}
						valueValue={valueValue}
						valueOnChange={valueOnChange}
						currencyName={currencyName}
						currencyOnChange={currencyOnChange}
						currencyValue={currencyValue}
						label={formatMessage({ id: 'donation_dialog.money_input.label' })}
						placeholder={formatMessage({ id: 'donation_dialog.money_input.placeholder' })}
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
								currency: OCurrencyName[currency as keyof typeof OCurrencyName],
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
