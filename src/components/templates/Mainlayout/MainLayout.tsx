import React from 'react';
import { MainContent, Navbar, Sidebar } from '../../organism';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [dekstopOpen, setDekstopOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDekstopOpen(true);
    setMobileOpen(false);
  };
  const handleDrawerClose = () => {
    setDekstopOpen(false);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar
        dekstopOpen={dekstopOpen}
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      <Sidebar
        dekstopOpen={dekstopOpen}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      <MainContent open={dekstopOpen}>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default MainLayout;
