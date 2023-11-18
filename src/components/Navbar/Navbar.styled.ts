import { Box as MuiBox, styled } from '@mui/material';

export const StyledNavbar = styled(MuiBox)(({ theme }) => ({
	backgroundColor: theme.palette.white.main,
	padding: theme.spacing(6, 10),
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}));
