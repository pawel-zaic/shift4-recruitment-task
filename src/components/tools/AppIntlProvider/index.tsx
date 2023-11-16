import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import { messagesEn } from '@web/lib';

type AppIntlProviderProps = {
	children?: ReactNode;
};

const locale = 'en';

export const AppIntlProvider = ({ children }: AppIntlProviderProps) => (
	<IntlProvider locale={locale} messages={messagesEn}>
		{children}
	</IntlProvider>
);
