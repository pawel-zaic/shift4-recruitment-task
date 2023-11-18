import { ReactElement } from 'react';

import { ButtonProps as MuiButtonProps } from '@mui/material';

import { StyledAppButton } from './AppButton.styled';

type AppButtonProps = MuiButtonProps & {
	icon?: ReactElement | null;
};

export const AppButton = ({ icon = null, children, ...props }: AppButtonProps) => (
	<StyledAppButton
		color="primary"
		variant="contained"
		disableElevation
		disableRipple
		{...props}
		onClick={props.onClick}
	>
		{icon}
		{children}
	</StyledAppButton>
);
