import { DialogProps as MuiDialogProps, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '@web/lib';
import { StyledDialog, StyledDialogContent } from './AppDialog.styled';
import { AppDialogTriggerArea } from './components/AppDialogTriggerArea';

export type AppDialogProps = MuiDialogProps & {
	keyId: string;
	triggerArea?: ReactNode;
	handleClose?: () => void;
};

export const AppDialog = ({
	keyId,
	open,
	triggerArea,
	children,
	handleClose,
	...props
}: AppDialogProps) => {
	const fullScreen = !useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<StyledDialog
			open={open}
			fullScreen={fullScreen}
			onClose={handleClose}
			aria-labelledby={`dialog-title--${keyId}`}
			aria-describedby={`dialog-content--${keyId}`}
			{...props}
		>
			{triggerArea && (
				<AppDialogTriggerArea id={`dialog-title--${keyId}`} key={keyId} handleClose={handleClose}>
					{triggerArea}
				</AppDialogTriggerArea>
			)}
			<StyledDialogContent id={`dialog-content--${keyId}`}>{children}</StyledDialogContent>
		</StyledDialog>
	);
};
