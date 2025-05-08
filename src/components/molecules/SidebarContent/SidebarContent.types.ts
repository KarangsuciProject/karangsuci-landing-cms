type Props = {
  handleDrawerClose?: () => void;
  isDrawerOpen?: boolean;
  isMobileOpen?: boolean;
};

type sidebarOpenedProps = {
  isDrawerOpen: boolean;
  isMobileOpen: boolean;
};

export type { Props, sidebarOpenedProps };
