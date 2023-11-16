import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@web/lib';
import { AppMain } from '@web/router';

const App = (_test: any) => (
	<ThemeProvider theme={theme}>
		<CssBaseline>
			<AppMain />
		</CssBaseline>
	</ThemeProvider>
);

export default App;
