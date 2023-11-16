import { Button } from '@mui/material';
import { useIntl } from 'react-intl';

export const AppButton = () => {
	const { formatMessage } = useIntl();

	return <Button>{formatMessage({ id: 'app.title' })}</Button>;
};
