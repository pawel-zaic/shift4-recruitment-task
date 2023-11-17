import { useIntl } from 'react-intl';

export const HomeView = () => {
	const { formatMessage } = useIntl();

	return <>{formatMessage({ id: 'app.title' })}</>;
};
