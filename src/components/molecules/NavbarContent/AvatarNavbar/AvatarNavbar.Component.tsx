import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import * as React from 'react';

const AvatarNavbar = () => {
  const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUser = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorUser(null);
  };

  return (
    <Box>
      <Tooltip title="open Settings">
        <IconButton onClick={handleOpenUser} size="small">
          <Avatar alt="User Account" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(anchorUser)}
        onClose={handleCloseUser}
        slotProps={{
          paper: {
            sx: {
              width: '130px',
            },
          },
        }}
      >
        <MenuItem onClick={handleCloseUser}>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AvatarNavbar;
