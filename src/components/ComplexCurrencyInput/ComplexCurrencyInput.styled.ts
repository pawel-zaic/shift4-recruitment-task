import { TextField as MuiTextField, Select as MuiSelect, styled } from '@mui/material';

import { sharedInputStyles } from '@web/styles';

export const StyledCurrencyInputTextField = styled(MuiTextField)(({ theme }) => ({
	'& .MuiInputBase-root': {
		...sharedInputStyles.root,
		fontSize: theme.spacing(6),
		fontWeight: 600,
		padding: theme.spacing(4, 4, 4, 2),
		border: 'none',
		'& fieldset': {
			borderColor: theme.palette.blueGray.light,
		},

		'&:hover fieldset': {
			borderColor: theme.palette.blueGray.light,
		},
		'&.Mui-focused fieldset': {
			borderColor: '#423C66',
		},
	},
	'& .MuiInputBase-input': {
		padding: theme.spacing(0, 0, 0, 0),
		height: theme.spacing(7),
		color: theme.palette.purpleGray.main,
	},
}));

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
	'&.currency-select': {
		padding: theme.spacing(0),

		'& fieldset': {
			padding: 0,
			border: 'none',
		},
		'& .MuiSelect-select': {
			minHeight: 'unset',
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 2, 0, 0),
			height: theme.spacing(7),
			color: theme.palette.purpleGray.main,
			lineHeight: 1,
		},

		'& svg': {
			fontSize: theme.spacing(8),
		},

		'& .MuiSelect-icon': {
			display: 'none',
		},
	},
}));
