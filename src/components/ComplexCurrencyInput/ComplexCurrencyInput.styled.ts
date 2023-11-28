import {
	TextField as MuiTextField,
	Select as MuiSelect,
	Box as MuiBox,
	styled,
} from '@mui/material';

export const StyledComplexCurrencyInput = styled(MuiBox)(() => ({
	display: 'flex',
	alignItems: 'flex-end',

	'& .MuiInputBase-root': {
		border: 'none',
	},
}));

export const StyledCurrencyInputTextField = styled(MuiTextField)(({ theme }) => ({
	'& .MuiInputBase-root': {
		fontSize: theme.spacing(6),
		fontWeight: 600,
		padding: theme.spacing(4, 4, 4, 2),
		border: 'none',
		'& fieldset': {
			border: 'none',
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

export const StyledSelect = styled(MuiSelect)(() => ({
	border: 'none',

	'& fieldset': {
		border: 'none',
	},
}));
