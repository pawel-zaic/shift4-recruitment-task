import { useIntl } from 'react-intl';

export const HomeView = () => {
	const { formatMessage } = useIntl();

	return <div>{formatMessage({ id: 'app.title' })}</div>;
};
