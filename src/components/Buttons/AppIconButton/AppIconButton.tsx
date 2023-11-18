import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

import { StyledIconButton } from './AppIconButton.styled';

export type AppIconButtonProps = MuiIconButtonProps;

export const AppIconButton = ({ onClick, children, ...props }: AppIconButtonProps) => (
	<StyledIconButton onClick={onClick} {...props}>
		{children}
	</StyledIconButton>
);
