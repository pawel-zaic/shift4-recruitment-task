import { Button as MuiButton, styled } from '@mui/material';

export const StyledAppButton = styled(MuiButton)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: '16px',
	gap: theme.spacing(1),
	padding: theme.spacing(4),
	minWidth: '236px',
	borderRadius: '5px',
	textTransform: 'none',
}));
