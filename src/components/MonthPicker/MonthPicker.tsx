import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useIntl } from 'react-intl';
import { format, addMonths, subMonths, differenceInCalendarMonths } from 'date-fns';

import { FormControl as MuiFormControl, BoxProps as MuiBoxProps } from '@mui/material';

import { ChevronLeftIcon, ChevronRightIcon } from '@web/assets';
import { AppIconButton, StyledInputLabel } from '@web/components';

import { useFocusableElement } from '@web/utils';
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

	const monthPickerRef = useRef<HTMLDivElement>(null);

	const { isFocused } = useFocusableElement(monthPickerRef);

	const changeMonthsByKeyboard = useCallback(
		(event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					onChange(addMonths(value, 1));
					break;
				case 'ArrowLeft':
					if (!isCurrentMonth) onChange(subMonths(value, 1));
					break;
				default:
					break;
			}
		},
		[value, isCurrentMonth, onChange],
	);

	useEffect(() => {
		if (isFocused) {
			document.addEventListener('keydown', changeMonthsByKeyboard);
		}

		return () => {
			document.removeEventListener('keydown', changeMonthsByKeyboard);
		};
	}, [isFocused, value]);

	return (
		<MuiFormControl component={MuiFormControl} sx={{ position: 'relative' }}>
			<StyledInputLabel aria-label={label}>
				{label}
				<StyledMonthPicker {...props} ref={monthPickerRef}>
					<AppIconButton
						onClick={() => onChange(subMonths(value, 1))}
						disabled={isCurrentMonth}
						aria-label={formatMessage({ id: 'button.previous' })}
						tabIndex={-1}
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
						tabIndex={-1}
					>
						<ChevronRightIcon />
					</AppIconButton>
				</StyledMonthPicker>
			</StyledInputLabel>
		</MuiFormControl>
	);
};
