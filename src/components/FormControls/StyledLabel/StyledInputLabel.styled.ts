import { FormLabel as MuiFormLabel, styled } from '@mui/material';

export const StyledInputLabel = styled(MuiFormLabel)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightMedium,
	fontSize: 14,
	lineHeight: 1.25,
	fontFamily: '"Work Sans", Inter',
	color: theme.palette.midnightGray.main,
	transform: 'none',
	display: 'flex',
	flexDirection: 'column',
	position: 'static',
	gap: theme.spacing(2),
}));
