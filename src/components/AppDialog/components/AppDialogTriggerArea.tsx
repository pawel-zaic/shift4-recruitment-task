import { BoxProps as MuiBoxProps, useMediaQuery } from '@mui/material';
import { AppCloseButton } from '@web/components';
import { theme } from '@web/lib';
import { ReactNode } from 'react';
import { StyledTriggerArea } from './AppDialogTriggerArea.styled';

interface AppDialogTriggerArea extends MuiBoxProps {
	handleClose?: () => void;
	children?: ReactNode;
}

export const AppDialogTriggerArea = ({
	handleClose,
	children,
	...props
}: AppDialogTriggerArea) => {
	const showCloseButton = !useMediaQuery(theme.breakpoints.up('md'));

	return (
		<StyledTriggerArea {...props}>
			{children}
			{showCloseButton && <AppCloseButton onClick={handleClose} />}
		</StyledTriggerArea>
	);
};
