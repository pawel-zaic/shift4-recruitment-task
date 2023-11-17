import {
	Dialog as MuiDialog,
	DialogContent as MuiDialogContent,
	styled,
} from '@mui/material';

export const StyledDialog = styled(MuiDialog)(({ theme }) => ({
	'& .MuiDialog-paper': {
		backgroundColor: theme.palette.white.main,
		color: theme.palette.midnightPurple.main,

		[theme.breakpoints.up('md')]: {
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
}));
