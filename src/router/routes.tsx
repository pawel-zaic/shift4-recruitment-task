import { useRoutes } from 'react-router-dom';

import { HomeView } from './HomeView/HomeView';

export const AppRouter = () => (
	<>{useRoutes([{ path: '/', element: <HomeView /> }])}</>
);
