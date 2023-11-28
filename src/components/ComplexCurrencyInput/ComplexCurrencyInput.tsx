import { ChangeEvent } from 'react';
import {
	Box as MuiBox,
	FormControl,
	TextFieldProps as MuiTextFieldProps,
	SelectChangeEvent,
} from '@mui/material';

import { BitcoinIcon, DollarIcon, EuroIcon, PoundIcon, YenIcon } from '@web/assets';
import { AppSelect, StyledInputLabel } from '@web/components';
import { useCurrency, useInput } from '@web/utils';
import { OCurrencyType } from '@web/types';

import { theme } from '@web/lib';
import {
	StyledComplexCurrencyInput,
	StyledCurrencyInputTextField,
} from './ComplexCurrencyInput.styled';

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
	const currencyKeys: OCurrencyType[] = ['usd', 'gbp', 'eur', 'btc', 'jpy'];

	const currencyAbbreviations: Record<OCurrencyType, string> = {
		btc: 'BTC',
		eur: 'EUR',
		gbp: 'GBP',
		jpy: 'JPY',
		usd: 'USD',
	};

	const currencyIcons: Record<OCurrencyType, JSX.Element> = {
		btc: <BitcoinIcon />,
		eur: <EuroIcon />,
		gbp: <PoundIcon />,
		jpy: <YenIcon />,
		usd: <DollarIcon />,
	};

	return (
		<StyledComplexCurrencyInput>
			<FormControl>
				<StyledInputLabel>
					{label}
					<StyledCurrencyInputTextField
						inputProps={{ maxLength: 12 }}
						InputLabelProps={{ shrink: true }}
						InputProps={{
							startAdornment: (
								<MuiBox
									sx={{
										display: 'flex',
										alignItems: 'center',
										fill: theme.palette.midnightGray.main,
										fontSize: theme.spacing(6),
									}}
								>
									{currencyIcons[currencyValue as keyof typeof currencyIcons]}
								</MuiBox>
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
			<FormControl>
				<AppSelect
					value={currencyValue}
					onChange={currencyOnChange}
					options={currencyKeys.map((key) => ({
						label: currencyAbbreviations[key as keyof typeof currencyAbbreviations],
						value: key,
					}))}
				/>
			</FormControl>
		</StyledComplexCurrencyInput>
	);
};
