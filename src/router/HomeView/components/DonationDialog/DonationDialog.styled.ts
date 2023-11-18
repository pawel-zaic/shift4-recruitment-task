import { Box as MuiBox, styled } from '@mui/material';

export const StyledFormFields = styled(MuiBox)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),

	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
		gap: theme.spacing(6),

		'& > *': {
			flex: '1 1 0px',
		},
	},
}));
