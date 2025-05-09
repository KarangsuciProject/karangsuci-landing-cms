import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { sidebarOpenedProps } from './SidebarContent.types';
import { Navigation } from './SidebarNavigation.data';

const SidebarNavigation = ({
  isDrawerOpen,
  isMobileOpen,
}: sidebarOpenedProps) => {
  const [selectedIndex, setSelectedIndex] = useState<string>('');
  const [openMap, setOpenMap] = useState<{ [key: number]: boolean }>({});

  const handleListItemClick = (event: React.MouseEvent, key: string) => {
    event.preventDefault();
    setSelectedIndex(key);
  };
  const handleToggle = (id: number) => {
    setOpenMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderChildren = (children: any[], parentId: number) => {
    return (
      <Collapse
        in={(isDrawerOpen || isMobileOpen) && openMap[parentId]}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {children.map((child, childId) => {
            const childKey = `child-${parentId}-${childId}`;
            return (
              <ListItemButton
                key={childId}
                sx={{ pl: 4 }}
                onClick={e => {
                  handleListItemClick(e, childKey);
                }}
                selected={selectedIndex === childKey}
              >
                <ListItemIcon>{child.icon}</ListItemIcon>
                <ListItemText>{child.name}</ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    );
  };

  const renderParent = (data: any, id: number) => {
    const hasChildren =
      Array.isArray(data.children) && data.children.length > 0;
    const parentKey = `parent-${id}`;
    const isOpen = openMap[id] || false;

    return (
      <div key={id}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={selectedIndex === parentKey}
            onClick={
              hasChildren
                ? () => handleToggle(id)
                : event => handleListItemClick(event, parentKey)
            }
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: 'initial',
            }}
          >
            <ListItemIcon sx={{ width: '60px', height: '25px' }}>
              {data.icon}
            </ListItemIcon>
            <ListItemText>{data.name}</ListItemText>
            {hasChildren &&
              (isOpen ? <ExpandMore /> : <KeyboardArrowLeftIcon />)}
          </ListItemButton>
        </ListItem>

        {hasChildren && renderChildren(data.children, id)}
      </div>
    );
  };

  return (
    <>
      <List disablePadding>{Navigation.map(renderParent)}</List>
    </>
  );
};

export default SidebarNavigation;
