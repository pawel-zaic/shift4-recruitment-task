import { TextField as MuiTextField, styled } from '@mui/material';

import { sharedInputStyles } from '@web/styles';

export const StyledCurrencyInputTextField = styled(MuiTextField)(({ theme }) => ({
	'& .MuiInputBase-root': {
		...sharedInputStyles.root,
		fontSize: theme.spacing(6),
		fontWeight: 600,
		padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(2)}`,
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
		padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(2)}`,
		height: theme.spacing(7),
		color: theme.palette.purpleGray.main,
	},
}));
