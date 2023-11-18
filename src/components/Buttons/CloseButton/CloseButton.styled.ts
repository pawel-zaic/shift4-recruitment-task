import { styled } from '@mui/material';
import { AppIconButton } from '../AppIconButton';

export const StyledCloseButton = styled(AppIconButton)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(2),
	top: theme.spacing(2),
	height: theme.spacing(10),
	width: theme.spacing(10),
	fill: theme.palette.purpleGray.main,
}));
