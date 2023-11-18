import { ReactNode } from 'react';

import { Container } from '@mui/material';

import { Navbar } from '@web/components';
import { theme } from '@web/lib';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => (
	<Container
		component="div"
		maxWidth="xl"
		disableGutters
		sx={{
			backgroundColor: '#F4F8FA',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
		}}
	>
		<Navbar />
		<Container
			maxWidth="xl"
			disableGutters
			sx={{ padding: theme.spacing(6), display: 'flex', flexDirection: 'column', flexGrow: '1' }}
		>
			{children}
		</Container>
	</Container>
);
