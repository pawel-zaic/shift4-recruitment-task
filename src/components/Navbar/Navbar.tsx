import { BoxProps as MuiBoxProps } from '@mui/material';

import { LogoIcon } from '@web/assets';
import { theme } from '@web/lib';

import { StyledNavbar } from './Navbar.styled';

type NavbarProps = MuiBoxProps;

export const Navbar = ({ children, ...props }: NavbarProps) => (
	<StyledNavbar {...props}>
		<LogoIcon
			sx={{ height: theme.spacing(8), width: 'auto', fill: theme.palette.midnightPurple.main }}
		/>
		{children}
	</StyledNavbar>
);
