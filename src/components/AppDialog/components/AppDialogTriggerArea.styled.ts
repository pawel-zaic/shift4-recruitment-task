import { Box as MuiBox, styled } from '@mui/material';

export const StyledTriggerArea = styled(MuiBox)(({ theme }) => ({
	padding: `${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(7)}`,
	position: 'relative',
	backgroundColor: theme.palette.salmon.main,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: theme.spacing(4),

	[theme.breakpoints.up('md')]: {
		padding: `${theme.spacing(8)} ${theme.spacing(10)} ${theme.spacing(6)}`,
		flexDirection: 'row',
		gap: theme.spacing(5),
	},
}));
