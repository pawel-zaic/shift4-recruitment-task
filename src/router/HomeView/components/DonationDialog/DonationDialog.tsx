import { AppDialog, AppDialogProps } from '@web/components';

type DonationDialogProps = AppDialogProps;

export const DonationDialog = ({ ...props }: DonationDialogProps) => (
	<AppDialog
		handleClose={() => console.log('test')}
		triggerArea={
			<>
				{/* <GivingBlockIcon
							fill={theme.palette.midnightPurple.main}
							width={60}
						/>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant="h2">The giving block</Typography>
							<Typography variant="body1">
								Set up your donation goal!
							</Typography>
						</Box> */}
			</>
		}
		{...props}
	>
		<div>Lorem ipsum</div>
	</AppDialog>
);
