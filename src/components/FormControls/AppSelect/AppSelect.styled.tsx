import { Select as MuiSelect, styled } from '@mui/material';

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
	fontSize: theme.spacing(4),
	fontWeight: 600,
	padding: theme.spacing(4, 4, 4, 2),
	border: 'none',
	minWidth: theme.spacing(8),

	'& fieldset': {
		borderColor: theme.palette.blueGray.light,
	},
	'&:hover fieldset': {
		borderColor: theme.palette.blueGray.light,
	},
	'&.Mui-focused fieldset': {
		borderColor: '#423C66',
	},
	'& .MuiSelect-select': {
		minHeight: 'unset',
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 0, 0, 2),
		height: theme.spacing(7),
		color: theme.palette.purpleGray.main,
		lineHeight: 1,

		'& .placeholder': {
			color: theme.palette.purpleGray.main,
			opacity: 0.42,
		},
	},
}));
