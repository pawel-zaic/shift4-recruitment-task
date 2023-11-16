import { Container } from '@mui/material';
import { ReactNode } from 'react';

interface MainTemplateProps {
	children: ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => (
	<Container
		component="div"
		maxWidth="xl"
		disableGutters
		sx={{ backgroundColor: 'ghostwhite' }}
	>
		{children}
	</Container>
);
