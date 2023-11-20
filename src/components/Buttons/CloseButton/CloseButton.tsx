import { CloseIcon } from '@web/assets';
import { AppIconButtonProps } from '@web/components';

import { StyledCloseButton } from './CloseButton.styled';

type CloseButtonProps = AppIconButtonProps;

export const CloseButton = ({ ...props }: CloseButtonProps) => (
	<StyledCloseButton {...props} aria-label="close">
		<CloseIcon />
	</StyledCloseButton>
);
