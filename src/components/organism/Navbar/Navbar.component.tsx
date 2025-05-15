import { Toolbar, Typography, Box } from '@mui/material';
import { StyledNavbar } from './StyledAppBar';
import { Props } from './Navbar.types';
import { AvatarNavbar, IconSidebar } from '../../molecules/NavbarContent';

const Navbar = ({
  dekstopOpen,
  mobileOpen,
  handleDrawerOpen,
  handleMobileDrawerToggle,
}: Props) => {
  return (
    <Box>
      <StyledNavbar position="fixed" isOpen={dekstopOpen}>
        <Toolbar>
          <IconSidebar
            dekstopOpen={dekstopOpen}
            mobileOpen={mobileOpen}
            handleDrawerOpen={handleDrawerOpen}
            handleMobileDrawerToggle={handleMobileDrawerToggle}
          />

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Karangsuci Dashboard
          </Typography>

          <AvatarNavbar />
        </Toolbar>
      </StyledNavbar>
    </Box>
  );
};

export default Navbar;
