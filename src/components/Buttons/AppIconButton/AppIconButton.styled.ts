import { IconButton as MuiIconButton, styled } from '@mui/material';

export const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
	fill: theme.palette.purpleGray.main,
	borderRadius: theme.spacing(1),
	height: theme.spacing(6),
	width: theme.spacing(6),
	padding: `${theme.spacing(1)} ${theme.spacing(2)}`,

	'&:disabled': {
		fill: theme.palette.blueGray.light,
	},

	'& .MuiTouchRipple-root .MuiTouchRipple-child': {
		borderRadius: theme.spacing(1),
	},
}));
