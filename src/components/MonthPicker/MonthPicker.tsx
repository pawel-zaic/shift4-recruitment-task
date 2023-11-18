import { useMemo } from 'react';
import { format, addMonths, subMonths, differenceInCalendarMonths } from 'date-fns';
import { FormControl as MuiFormControl, BoxProps as MuiBoxProps } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@web/assets';
import { AppIconButton } from '@web/components';
import { StyledInputLabel } from '../CurrencyInput/CurrencyInput.styled';
import {
	StyledMonthPicker,
	StyledDateValueInfo,
	StyledMonthTypography,
	StyledYearTypography,
} from './MonthPicker.styled';

type MonthPickerProps = Omit<MuiBoxProps, 'onChange' | 'id'> & {
	label: string;
	value: Date;
	id: string;
	onChange: (value: Date) => void;
};

export const MonthPicker = ({ value, label, id, onChange, ...props }: MonthPickerProps) => {
	const isCurrentMonth = useMemo(() => differenceInCalendarMonths(value, new Date()) < 1, [value]);

	return (
		<MuiFormControl sx={{ position: 'relative' }}>
			<StyledInputLabel aria-label={label} htmlFor={id}>
				{label}
			</StyledInputLabel>
			<StyledMonthPicker id={id} {...props}>
				<AppIconButton
					onClick={() => onChange(subMonths(value, 1))}
					disabled={isCurrentMonth}
					aria-label="previous"
				>
					<ChevronLeftIcon />
				</AppIconButton>

				<StyledDateValueInfo>
					<StyledMonthTypography as="span">{format(value, 'MMMM')}</StyledMonthTypography>
					<StyledYearTypography as="span">{format(value, 'yyyy')}</StyledYearTypography>
				</StyledDateValueInfo>
				<AppIconButton onClick={() => onChange(addMonths(value, 1))} aria-label="next">
					<ChevronRightIcon />
				</AppIconButton>
			</StyledMonthPicker>
		</MuiFormControl>
	);
};
