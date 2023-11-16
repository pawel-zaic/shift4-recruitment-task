import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@web/lib';
import { AppIntlProvider } from '@web/components';
import { AppMain } from '@web/router';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter>
			<AppIntlProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<AppMain />
					</CssBaseline>
				</ThemeProvider>
			</AppIntlProvider>
		</BrowserRouter>
	</StrictMode>,
);
