import { createTheme } from '@mui/material';

let theme = createTheme({
	typography: {
		fontFamily: [
			'Inter',
			'"Work Sans"',
			'Rubik',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'-apple-system',
			'sans-serif',
		].join(','),
	},
});

theme = createTheme(theme, {});

export { theme };
