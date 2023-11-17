import { IconButton as MuiIconButton, styled } from '@mui/material';

export const StyledCloseButton = styled(MuiIconButton)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(2),
	top: theme.spacing(2),
	fill: theme.palette.purpleGray.main,
	borderRadius: theme.spacing(2),
}));
