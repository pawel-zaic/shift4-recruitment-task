import { TextField as MuiTextField, styled } from '@mui/material';

export const StyledCurrencyInputTextField = styled(MuiTextField)(
	({ theme }) => ({
		'&.MuiTextField-root': {
			marginTop: theme.spacing(6),
		},
		'& .MuiInputBase-root': {
			borderRadius: 4,
			border: '1px solid',
			borderColor: theme.palette.blueGray.light,
			fontSize: theme.spacing(6),
			fontWeight: 600,
			width: 'auto',
			padding: `${theme.spacing(4)} ${theme.spacing(4)} ${theme.spacing(
				4,
			)} ${theme.spacing(2)}`,
			backgroundColor: theme.palette.white.main,

			transition: theme.transitions.create([
				'border-color',
				'background-color',
				'box-shadow',
			]),
			'& fieldset span': {
				display: 'none',
			},

			'&:hover fieldset': {
				borderColor: theme.palette.blueGray.light,
			},
			'&.Mui-focused fieldset': {
				borderColor: '#423C66',
			},
		},
		'& .MuiInputBase-input': {
			padding: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(
				0,
			)} ${theme.spacing(2)}`,
			height: theme.spacing(7),
			color: theme.palette.purpleGray.main,
		},
		'& .MuiInputLabel-root': {
			fontWeight: theme.typography.fontWeightMedium,
			fontSize: 14,
			lineHeight: 18,
			fontFamily: '"Work Sans", Inter',
			color: theme.palette.midnightGray.main,
			transform: 'none',
			top: theme.spacing(-5),
		},
	}),
);
