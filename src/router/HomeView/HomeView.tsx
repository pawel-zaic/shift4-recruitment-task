import { AppButton } from '@web/components';
import { useIntl } from 'react-intl';

export const HomeView = () => {
	const { formatMessage } = useIntl();

	return (
		<>
			{formatMessage({ id: 'app.title' })}
			<AppButton>Test</AppButton>
			<AppButton variant="outlined"> Tests2</AppButton>
		</>
	);
};
