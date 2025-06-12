import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

import { NavType, sidebarOpenedProps } from './SidebarContent.types';
import { Navigation } from './SidebarNavigation.data';

const SidebarNavigation = ({
  isDrawerOpen,
  isMobileOpen,
}: sidebarOpenedProps) => {
  const [selectedIndex, setSelectedIndex] = useState<string>('');
  const [openMap, setOpenMap] = useState<{ [key: number]: boolean }>({});

  const navigate = useNavigate();

  const findPathBySegment = (
    items: { segment: string; path?: string; children?: NavType[] }[],
    segment: string
  ): string | null => {
    for (const item of items) {
      if (item.children && item.children.length > 0) {
        const result = findPathBySegment(item.children, segment);
        if (result) return result;
      }

      if (item.segment.toLowerCase() === segment.toLowerCase() && item.path) {
        return item.path;
      }
    }
    return null;
  };
  const handleListItemClick = (event: React.MouseEvent, key: string) => {
    event.preventDefault();

    const path = findPathBySegment(Navigation, key);

    if (path && path !== '#') {
      navigate(path);
      setSelectedIndex(key);
    }
  };
  const handleToggle = (id: number) => {
    setOpenMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderChildren = (children: NavType[], parentId: number) => {
    return (
      <Collapse
        in={(isDrawerOpen || isMobileOpen) && openMap[parentId]}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {children.map(child => {
            const childKey = child.segment;
            return (
              <ListItemButton
                key={childKey}
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

  const renderParent = (data: NavType, id: number) => {
    const hasChildren =
      Array.isArray(data.children) && data.children.length > 0;
    const parentKey = data.segment;
    const isOpen = openMap[id] || false;

    return (
      <div key={id}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            selected={selectedIndex === parentKey}
            onClick={
              hasChildren
                ? () => handleToggle(id)
                : event => handleListItemClick(event, data.segment)
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

        {hasChildren && renderChildren(data.children!, id)}
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
