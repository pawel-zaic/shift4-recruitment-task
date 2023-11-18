import { Box as MuiBox, styled } from '@mui/material';

export const StyledTriggerArea = styled(MuiBox)(({ theme }) => ({
	padding: theme.spacing(4, 6, 7),
	position: 'relative',
	backgroundColor: theme.palette.salmon.main,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: theme.spacing(4),

	[theme.breakpoints.up('sm')]: {
		padding: theme.spacing(8, 10, 6),
		flexDirection: 'row',
		gap: theme.spacing(5),
	},
}));
