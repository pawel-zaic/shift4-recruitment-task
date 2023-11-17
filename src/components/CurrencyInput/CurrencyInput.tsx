import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

import { DollarIcon } from '@web/assets';
import { theme } from '@web/lib';
import { useInput } from '@web/utils';

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
	const formatter = new Intl.NumberFormat('en-US');

	return (
		<StyledCurrencyInputTextField
			InputProps={{
				startAdornment: (
					<DollarIcon
						fill={theme.palette.midnightGray.main}
						sx={{ fontSize: theme.spacing(6) }}
					/>
				),
			}}
			InputLabelProps={{ shrink: true }}
			placeholder={placeholder}
			label={label}
			value={value && formatter.format(+value)}
			onChange={(value) => {
				onChange(
					value.target.value ? `${Number(allowOnlyNumberInput(value))}` : '',
				);
			}}
			{...props}
		/>
	);
};
