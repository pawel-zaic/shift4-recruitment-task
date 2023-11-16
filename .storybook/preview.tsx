import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../src/lib';

import { AppIntlProvider } from '../src/components';

export const withMuiTheme = (Story) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Story />
			</CssBaseline>
		</ThemeProvider>
	</AppIntlProvider>
);

export const decorators = [withMuiTheme];
