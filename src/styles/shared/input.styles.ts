import { theme } from '@web/lib';

export const sharedInputStyles = {
	root: {
		borderRadius: 4,
		border: '1px solid',
		width: 'auto',
		backgroundColor: theme.palette.white.main,
		transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
	},
	label: {
		fontWeight: theme.typography.fontWeightMedium,
		fontSize: 14,
		lineHeight: 1.25,
		fontFamily: '"Work Sans", Inter',
		color: theme.palette.midnightGray.main,
		transform: 'none',
		display: 'flex',
		flexDirection: 'column',
		position: 'static',
		gap: theme.spacing(2),
	},
};
