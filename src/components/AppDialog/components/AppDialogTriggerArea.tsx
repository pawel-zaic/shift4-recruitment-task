import { ReactNode } from 'react';
import { BoxProps as MuiBoxProps, useMediaQuery } from '@mui/material';

import { CloseButton } from '@web/components';
import { theme } from '@web/lib';

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
			{showCloseButton && <CloseButton onClick={handleClose} />}
		</StyledTriggerArea>
	);
};
