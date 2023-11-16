import { ReactElement, ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { RenderOptions, render } from '@testing-library/react';

import { theme } from '@web/lib';

import { AppIntlProvider } from '@web/components';

const ProvidersWrappers = ({ children }: { children: ReactNode }) => (
	<AppIntlProvider>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</AppIntlProvider>
);

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: ProvidersWrappers, ...options });

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
