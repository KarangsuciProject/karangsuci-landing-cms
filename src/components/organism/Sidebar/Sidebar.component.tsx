import { SidebarContent } from '../../molecules';
import { Props } from './Sidebar.types';
import { DekstopSidebar, MobileSidebar } from './StyledSideBar';

const Sidebar = ({ dekstopOpen, mobileOpen, handleDrawerClose }: Props) => {
  return (
    <>
      {/* mobile */}
      <MobileSidebar
        variant="temporary"
        open={mobileOpen}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarContent isMobileOpen={mobileOpen} />
      </MobileSidebar>

      {/* dekstop */}
      <DekstopSidebar variant="permanent" open={dekstopOpen}>
        <SidebarContent
          handleDrawerClose={handleDrawerClose}
          isDrawerOpen={dekstopOpen}
        />
      </DekstopSidebar>
    </>
  );
};

export default Sidebar;
