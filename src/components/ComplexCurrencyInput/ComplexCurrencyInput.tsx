import { ChangeEvent } from 'react';
import {
	Box,
	FormControl,
	MenuItem,
	TextFieldProps as MuiTextFieldProps,
	SelectChangeEvent,
} from '@mui/material';

import { BitcoinIcon, DollarIcon, EuroIcon, PoundIcon, YenIcon } from '@web/assets';
import { StyledInputLabel } from '@web/components';
import { useCurrency, useInput } from '@web/utils';
import { OCurrencyType } from '@web/types';

import { theme } from '@web/lib';
import { StyledCurrencyInputTextField, StyledSelect } from './ComplexCurrencyInput.styled';

type ComplexCurrencyInputProps = Omit<MuiTextFieldProps, 'onChange'> & {
	valueValue: string;
	valueName: string;
	valueOnChange: (value: string) => void;
	currencyValue: OCurrencyType;
	currencyName: string;
	currencyOnChange: (value: SelectChangeEvent<unknown>) => void;
};

export const ComplexCurrencyInput = ({
	valueValue,
	valueName,
	valueOnChange,
	currencyName,
	currencyOnChange,
	currencyValue,
	label,
	placeholder,
	...props
}: ComplexCurrencyInputProps) => {
	const { allowOnlyNumberInput } = useInput();
	const { formatAsCurrency } = useCurrency();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		// Remove non-numeric and non-dot characters
		const numericValue = allowOnlyNumberInput(event);

		// Format the value as a currency
		const formattedValue = formatAsCurrency(numericValue);

		valueOnChange(formattedValue);
	};

	const currencyIcons: Record<OCurrencyType, JSX.Element> = {
		btc: <BitcoinIcon />,
		eur: <EuroIcon />,
		gbp: <PoundIcon />,
		jpy: <YenIcon />,
		usd: <DollarIcon />,
	};

	return (
		<FormControl>
			<StyledInputLabel>
				{label}
				<StyledCurrencyInputTextField
					inputProps={{ maxLength: 12 }}
					InputLabelProps={{ shrink: true }}
					InputProps={{
						startAdornment: (
							<StyledSelect
								IconComponent={undefined}
								value={currencyValue}
								onChange={currencyOnChange}
								renderValue={(value) => (
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											fill: theme.palette.midnightGray.main,
											fontSize: theme.spacing(10),
										}}
									>
										{currencyIcons[value as keyof typeof currencyIcons]}
									</Box>
								)}
								name={currencyName}
								className="currency-select"
							>
								{Object.keys(currencyIcons).map((key) => (
									<MenuItem key={key} value={key} sx={{ fill: theme.palette.midnightGray.main }}>
										{currencyIcons[key as keyof typeof currencyIcons]}
									</MenuItem>
								))}
							</StyledSelect>
						),
					}}
					{...props}
					placeholder={placeholder}
					value={valueValue}
					onChange={handleInputChange}
					name={valueName}
				/>
			</StyledInputLabel>
		</FormControl>
	);
};
