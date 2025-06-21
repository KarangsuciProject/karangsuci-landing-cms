import { ReactNode } from 'react';

type Props = {
  handleDrawerClose?: () => void;
  isDrawerOpen?: boolean;
  isMobileOpen?: boolean;
};

type sidebarOpenedProps = {
  isDrawerOpen: boolean;
  isMobileOpen: boolean;
};

type NavType = {
  segment: string;
  name: string;
  icon: ReactNode;
  path?: string;
  children?: NavType[];
};

export type { Props, sidebarOpenedProps, NavType };
