import {
	FormControl,
	MenuItem as MuiMenuItem,
	FormControlProps as MuiFormControlProps,
	SelectProps as MuiSelectProps,
} from '@mui/material';
import { StyledInputLabel } from '@web/components';
import { theme } from '@web/lib';
import { StyledSelect } from './AppSelect.styled';

export type AppSelectOption = {
	label: string;
	value: string;
};

type AppSelectProps = Omit<MuiFormControlProps, 'onChange'> &
	MuiSelectProps & {
		options: AppSelectOption[];
		defaultValue?: AppSelectOption[][number]['value'] | '';
	};

export const AppSelect = ({
	options,
	onChange,
	onBlur,
	value,
	label,
	placeholder,
	defaultValue = '',
	...props
}: AppSelectProps) => (
	<FormControl>
		<StyledInputLabel>
			{label}
			<StyledSelect
				displayEmpty
				{...props}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				defaultValue={defaultValue}
				MenuProps={{
					anchorOrigin: {
						vertical: 'bottom',
						horizontal: 'left',
					},
				}}
				renderValue={(value) => {
					if (!value) {
						return (
							<span className="placeholder" color={theme.palette.purpleGray.main}>
								{placeholder}
							</span>
						);
					}
					return <span>{`${options.find((option) => option.value === value)?.label}`}</span>;
				}}
			>
				{placeholder && <MuiMenuItem value="">{placeholder}</MuiMenuItem>}
				{options.map((option) => (
					<MuiMenuItem key={option.value} value={option.value}>
						{option.label}
					</MuiMenuItem>
				))}
			</StyledSelect>
		</StyledInputLabel>
	</FormControl>
);
