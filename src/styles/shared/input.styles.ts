import { theme } from '@web/lib';

export const sharedInputStyles = {
	root: {
		marginTop: theme.spacing(6),
		borderRadius: 4,
		border: '1px solid',
		width: 'auto',
		backgroundColor: theme.palette.white.main,
		transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
	},
};
