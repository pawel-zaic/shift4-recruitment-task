import { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { CloseIcon } from '@web/assets';
import { StyledCloseButton } from './AppCloseButton.styled';

interface AppCloseButtonProps extends MuiIconButtonProps {}

export const AppCloseButton = ({ onClick, ...props }: AppCloseButtonProps) => (
	<StyledCloseButton aria-label="close" onClick={onClick} {...props}>
		<CloseIcon />
	</StyledCloseButton>
);
