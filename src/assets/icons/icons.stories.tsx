import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';

import { theme } from '@web/lib';

import * as Icons from './index';

const IconsEntries = Object.entries(Icons);

/**
 * Story to show all icons that are in form of React components
 */
const Story = {
	component: Icons,
	title: 'assets/Icons',
};
export default Story;

const Template = () => (
	<Stack direction="column" spacing={3}>
		{IconsEntries.map((item, index) => (
			<Box
				component="div"
				sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(4) }}
				key={index}
			>
				<Typography variant="body1"> {item[0]}:</Typography>
				{item[1]({ fontSize: 'large' })}
			</Box>
		))}
	</Stack>
);

export const Primary = Template.bind({});
