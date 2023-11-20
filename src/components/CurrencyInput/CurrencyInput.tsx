import { ChangeEvent } from 'react';
import { FormControl, TextFieldProps as MuiTextFieldProps } from '@mui/material';

import { DollarIcon } from '@web/assets';
import { StyledInputLabel } from '@web/components';
import { theme } from '@web/lib';
import { useCurrency, useInput } from '@web/utils';

import { StyledCurrencyInputTextField } from './CurrencyInput.styled';

type CurrencyInputProps = Omit<MuiTextFieldProps, 'onChange'> & {
	value: string;
	onChange: (value: string) => void;
};

export const CurrencyInput = ({
	value,
	onChange,
	label,
	placeholder,
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

	return (
		<FormControl>
			<StyledInputLabel>
				{label}
				<StyledCurrencyInputTextField
					inputProps={{ maxLength: 12 }}
					InputLabelProps={{ shrink: true }}
					InputProps={{
						startAdornment: (
							<DollarIcon
								fill={theme.palette.midnightGray.main}
								sx={{ fontSize: theme.spacing(6) }}
							/>
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
