import {
	PaletteColor,
	PaletteColorOptions,
	alpha,
	createTheme,
} from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		salmon: PaletteColor;
		blueGray: PaletteColor;
		purpleGray: PaletteColor;
		midnightGray: PaletteColor;
		midnightPurple: PaletteColor;
		strokeColor: PaletteColor;
		backgroundGray: PaletteColor;
		white: PaletteColor;
		black: PaletteColor;
	}

	interface PaletteOptions {
		salmon?: PaletteColorOptions;
		blueGray?: PaletteColorOptions;
		purpleGray?: PaletteColorOptions;
		midnightGray?: PaletteColorOptions;
		midnightPurple?: PaletteColorOptions;
		strokeColor?: PaletteColorOptions;
		backgroundGray?: PaletteColorOptions;
		white?: PaletteColorOptions;
		black?: PaletteColorOptions;
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
		midnightPurple: {
			main: '#423C66',
		},
		white: {
			main: '#ffffff',
		},
		black: {
			main: '#000000',
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

theme = createTheme(theme, {
	typography: {
		h2: {
			fontFamily: 'Work Sans',
			fontSize: theme.spacing(6),
			fontWeight: theme.typography.fontWeightBold,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {},
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						'&:hover': {
							backgroundColor: theme.palette.primary.light,
						},
						'&:active': {
							backgroundColor: theme.palette.primary.dark,
						},
					},
				},
				{
					props: { variant: 'outlined', color: 'primary' },
					style: {
						borderColor: '#474A62',
						borderWidth: '1px',
						'&:hover': {
							backgroundColor: alpha('#B2A7F4', 0.1),
							borderColor: '#474A62',
							borderWidth: '1px',
						},
						'&:active': {
							backgroundColor: alpha('#B2A7F4', 0.25),
							borderColor: '#474A62',
							borderWidth: '1px',
						},
					},
				},
			],
		},
	},
});

export { theme };
