import { Button as MuiButton, styled } from '@mui/material';

export const StyledAppButton = styled(MuiButton)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: theme.typography.htmlFontSize,
	lineHeight: 1.25,
	gap: theme.spacing(1),
	padding: theme.spacing(4, 6),
	borderRadius: '5px',
	textTransform: 'none',

	'&:focus-visible': {
		outline: `1px solid #474A62`,
		outlineOffset: theme.spacing(1),
	},
}));
