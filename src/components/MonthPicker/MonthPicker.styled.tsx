import { Box as MuiBox, Typography as MuiTypography, styled } from '@mui/material';

import { sharedInputStyles } from '@web/styles';

export const StyledMonthPicker = styled(MuiBox)(({ theme }) => ({
	...sharedInputStyles.root,
	padding: theme.spacing(3),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(4),
	borderColor: theme.palette.blueGray.light,
}));

export const StyledDateValueInfo = styled(MuiBox)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	flexGrow: 1,
	color: theme.palette.purpleGray.main,
}));

export const StyledMonthTypography = styled(MuiTypography)(({ theme }) => ({
	fontFamily: 'Rubik, "Work Sans", Inter',
	fontWeight: theme.typography.fontWeightMedium,
	lineHeight: 1.25,
	fontSize: theme.spacing(4),
}));

export const StyledYearTypography = styled(MuiTypography)(({ theme }) => ({
	fontFamily: '"Work Sans", Inter',
	fontWeight: theme.typography.fontWeightRegular,
	lineHeight: 1.3,
	fontSize: theme.spacing(3),
}));
