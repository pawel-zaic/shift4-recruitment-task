import { ChangeEvent, useMemo } from 'react';
import { Box, FormControl, TextFieldProps as MuiTextFieldProps } from '@mui/material';

import { BitcoinIcon, DollarIcon, EuroIcon, PoundIcon, YenIcon } from '@web/assets';
import { StyledInputLabel } from '@web/components';
import { theme } from '@web/lib';
import { useCurrency, useInput } from '@web/utils';
import { OCurrencyType } from '@web/types';

import { StyledCurrencyInputTextField } from './CurrencyInput.styled';

type CurrencyInputProps = Omit<MuiTextFieldProps, 'onChange'> & {
	currency: OCurrencyType;
	value: string;
	onChange: (value: string) => void;
};

export const CurrencyInput = ({
	value,
	onChange,
	label,
	placeholder,
	currency = 'usd',
	...props
}: CurrencyInputProps) => {
	const { allowOnlyNumberInput } = useInput();
	const { formatAsCurrency } = useCurrency();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		// Remove non-numeric and non-dot characters
		const numericValue = allowOnlyNumberInput(event);

		// Format the value as a currency
		const formattedValue = formatAsCurrency(numericValue);

		onChange(formattedValue);
	};

	const currencyIcon = useMemo(() => {
		switch (currency) {
			case 'usd':
				return <DollarIcon />;
			case 'btc':
				return <BitcoinIcon />;
			case 'eur':
				return <EuroIcon />;
			case 'gbp':
				return <PoundIcon />;
			case 'jpy':
				return <YenIcon />;
			default:
				return <DollarIcon />;
		}
	}, [currency]);

	return (
		<FormControl>
			<StyledInputLabel>
				{label}
				<StyledCurrencyInputTextField
					inputProps={{ maxLength: 12 }}
					InputLabelProps={{ shrink: true }}
					InputProps={{
						startAdornment: (
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									fill: theme.palette.midnightGray.main,
									fontSize: theme.spacing(6),
								}}
							>
								{currencyIcon}
							</Box>
						),
					}}
					{...props}
					placeholder={placeholder}
					value={value}
					onChange={handleInputChange}
				/>
			</StyledInputLabel>
		</FormControl>
	);
};
