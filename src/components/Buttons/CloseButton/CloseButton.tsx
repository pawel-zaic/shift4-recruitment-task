import { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { CloseIcon } from '@web/assets';
import { StyledCloseButton } from './CloseButton.styled';

interface CloseButtonProps extends MuiIconButtonProps {}

export const CloseButton = ({ onClick, ...props }: CloseButtonProps) => (
	<StyledCloseButton aria-label="close" onClick={onClick} {...props}>
		<CloseIcon />
	</StyledCloseButton>
);
