import { DialogProps as MuiDialogProps, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '@web/lib';
import { StyledDialog, StyledDialogContent } from './AppDialog.styled';
import { AppDialogTriggerArea } from './components/AppDialogTriggerArea';

export type AppDialogProps = MuiDialogProps & {
	triggerArea?: ReactNode;
	handleClose?: () => void;
};

export const AppDialog = ({
	open,
	triggerArea,
	children,
	handleClose,
	...props
}: AppDialogProps) => {
	const fullScreen = !useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<StyledDialog open={open} fullScreen={fullScreen} onClose={handleClose} {...props}>
			{triggerArea && (
				<AppDialogTriggerArea handleClose={handleClose}>{triggerArea}</AppDialogTriggerArea>
			)}
			<StyledDialogContent>{children}</StyledDialogContent>
		</StyledDialog>
	);
};
