import { ReactElement } from 'react';

import { ButtonProps as MuiButtonProps } from '@mui/material';

import { StyledAppButton } from './AppButton.styled';

type AppButtonProps = MuiButtonProps & {
	icon?: ReactElement | null;
};

export const AppButton = ({ icon = null, children, onClick, ...props }: AppButtonProps) => (
	<StyledAppButton
		{...props}
		color="primary"
		variant="contained"
		disableElevation
		disableRipple
		onClick={onClick}
	>
		{icon}
		{children}
	</StyledAppButton>
);
