import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Props from './IconSidebar.types';

const IconSidebar = ({
  handleDrawerOpen,
  handleMobileDrawerToggle,
  mobileOpen,
  dekstopOpen,
}: Props) => {
  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        onClick={handleMobileDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        {mobileOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <IconButton
        color="inherit"
        edge="start"
        onClick={handleDrawerOpen}
        sx={{
          mr: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <MenuIcon sx={{ display: dekstopOpen ? 'none' : 'block' }} />
      </IconButton>
    </>
  );
};

export default IconSidebar;
