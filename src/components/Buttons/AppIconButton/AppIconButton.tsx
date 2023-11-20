import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

import { StyledIconButton } from './AppIconButton.styled';

export type AppIconButtonProps = MuiIconButtonProps;

export const AppIconButton = ({ children, ...props }: AppIconButtonProps) => (
	<StyledIconButton {...props}>{children}</StyledIconButton>
);
