import {
	Dialog as MuiDialog,
	DialogContent as MuiDialogContent,
	DialogActions as MuiDialogActions,
	styled,
} from '@mui/material';

export const StyledDialog = styled(MuiDialog)(({ theme }) => ({
	'& .MuiDialog-paper': {
		backgroundColor: theme.palette.white.main,
		color: theme.palette.midnightPurple.main,

		[theme.breakpoints.up('sm')]: {
			width: '600px',
		},
	},
}));

export const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: `${theme.spacing(8)} ${theme.spacing(6)} ${theme.spacing(12)}`,
	backgroundColor: theme.palette.white.main,

	'& > *': {
		width: '100%',
	},
}));

export const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(7),
	padding: 0,
	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
	},
}));
