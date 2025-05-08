import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Props } from './SidebarContent.types';
import SidebarNavigation from './SidebarNavigation';

const SidebarContent = ({
  handleDrawerClose,
  isDrawerOpen = false,
  isMobileOpen = false,
}: Props) => {
  return (
    <>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: '14.5px',
          mt: { xs: 7, sm: 0 },
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6">Karangsuci CMS</Typography>
        <IconButton
          onClick={handleDrawerClose}
          size="small"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <ChevronLeftIcon width="20" />
        </IconButton>
      </Box>

      <Divider />

      {/* Menu List */}
      <SidebarNavigation
        isDrawerOpen={isDrawerOpen}
        isMobileOpen={isMobileOpen}
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* Footer */}
      <Box sx={{ p: 2 }}>
        <Typography variant="caption">v1.0.0</Typography>
      </Box>
    </>
  );
};

export default SidebarContent;
