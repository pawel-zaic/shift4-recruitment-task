import { CloseIcon } from '@web/assets';
import { AppIconButtonProps } from '@web/components';

import { StyledCloseButton } from './CloseButton.styled';

type CloseButtonProps = AppIconButtonProps;

export const CloseButton = ({ onClick, ...props }: CloseButtonProps) => (
	<StyledCloseButton aria-label="close" onClick={onClick} {...props}>
		<CloseIcon />
	</StyledCloseButton>
);
