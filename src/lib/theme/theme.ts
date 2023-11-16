import { PaletteColor, PaletteColorOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		salmon: PaletteColor;
		blueGray: PaletteColor;
		purpleGray: PaletteColor;
		midnightGray: PaletteColor;
		midnightPurple: PaletteColor;
		strokeColor: PaletteColor;
		backgroundGray: PaletteColor;
	}

	interface PaletteOptions {
		salmon?: PaletteColorOptions;
		blueGray?: PaletteColorOptions;
		purpleGray?: PaletteColorOptions;
		midnightGray?: PaletteColorOptions;
		midnightPurple?: PaletteColorOptions;
		strokeColor?: PaletteColorOptions;
		backgroundGray?: PaletteColorOptions;
	}
}

let theme = createTheme({
	palette: {
		primary: {
			main: '#423C66',
			dark: '#241E47',
			light: '#645D93',
			contrastText: '#ffffff',
		},
		salmon: {
			main: '#FFDBCB',
		},
		blueGray: {
			main: '#1E2A32',
		},
		purpleGray: {
			main: '#595D7B',
		},
		midnightGray: {
			main: '#4D6475',
		},
		backgroundGray: {
			main: '#F4F8FA',
		},
	},
	spacing: 4,
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
