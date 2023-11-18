import { TextField as MuiTextField, InputLabel as MuiInputLabel, styled } from '@mui/material';

import { sharedInputStyles } from '@web/styles';

export const StyledCurrencyInputTextField = styled(MuiTextField)(({ theme }) => ({
	'& .MuiInputBase-root': {
		...sharedInputStyles.root,
		fontSize: theme.spacing(6),
		fontWeight: 600,
		padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(2)}`,

		'&:hover fieldset': {
			borderColor: theme.palette.blueGray.light,
		},
		'&.Mui-focused fieldset': {
			borderColor: '#423C66',
		},
	},
	'& .MuiInputBase-input': {
		padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(2)}`,
		height: theme.spacing(7),
		color: theme.palette.purpleGray.main,
	},
}));

export const StyledInputLabel = styled(MuiInputLabel)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightMedium,
	fontSize: 14,
	lineHeight: 1.25,
	fontFamily: '"Work Sans", Inter',
	color: theme.palette.midnightGray.main,
	transform: 'none',
}));
