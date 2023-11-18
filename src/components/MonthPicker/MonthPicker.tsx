import { useMemo } from 'react';
import { format, addMonths, subMonths, differenceInCalendarMonths } from 'date-fns';
import { FormControl as MuiFormControl, BoxProps as MuiBoxProps } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@web/assets';
import { AppIconButton, StyledInputLabel } from '@web/components';
import { useIntl } from 'react-intl';
import {
	StyledMonthPicker,
	StyledDateValueInfo,
	StyledMonthTypography,
	StyledYearTypography,
} from './MonthPicker.styled';

type MonthPickerProps = Omit<MuiBoxProps, 'onChange'> & {
	label: string;
	value: Date;
	onChange: (value: Date) => void;
};

export const MonthPicker = ({ value, label, onChange, ...props }: MonthPickerProps) => {
	const { formatMessage } = useIntl();
	const isCurrentMonth = useMemo(() => differenceInCalendarMonths(value, new Date()) < 1, [value]);

	return (
		<MuiFormControl sx={{ position: 'relative' }}>
			<StyledInputLabel aria-label={label}>
				{label}
				<StyledMonthPicker {...props}>
					<AppIconButton
						onClick={() => onChange(subMonths(value, 1))}
						disabled={isCurrentMonth}
						aria-label={formatMessage({ id: 'button.previous' })}
					>
						<ChevronLeftIcon />
					</AppIconButton>

					<StyledDateValueInfo>
						<StyledMonthTypography as="span">{format(value, 'MMMM')}</StyledMonthTypography>
						<StyledYearTypography as="span">{format(value, 'yyyy')}</StyledYearTypography>
					</StyledDateValueInfo>
					<AppIconButton
						onClick={() => onChange(addMonths(value, 1))}
						aria-label={formatMessage({ id: 'button.next' })}
					>
						<ChevronRightIcon />
					</AppIconButton>
				</StyledMonthPicker>
			</StyledInputLabel>
		</MuiFormControl>
	);
};
