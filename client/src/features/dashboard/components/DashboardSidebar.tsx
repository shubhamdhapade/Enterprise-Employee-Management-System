/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-34
 * File    : DashboardSidebar.tsx
 * Description:
 * Responsive sidebar with nested navigation.
 * -----------------------------------------------------------------------------
 */

import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
} from "@mui/material";

import NavigationItem from "./NavigationItem";
import NavigationGroup from "./NavigationGroup";

import { navigationItems } from "../constants/navigation";
import useNavigation from "../hooks/useNavigation";

const DRAWER_WIDTH = 240;

interface DashboardSidebarProps {
  mobile?: boolean;
}

const DashboardSidebar = ({
  mobile = false,
}: DashboardSidebarProps) => {
  const {
    collapsed,
    mobileOpen,
    expandedMenus,
    closeMobileDrawer,
    toggleMenu,
  } = useNavigation();

  const sidebarContent = (
    <>
      <Toolbar />

      <Divider />

      <Box
        sx={{
          overflowY: "auto",
          flexGrow: 1,
          py: 1,
        }}
      >
        <List disablePadding>
          {navigationItems.map((item) =>
            item.children ? (
              <NavigationGroup
                item={item}
                collapsed={collapsed}
                expanded={expandedMenus[item.id] ?? false}
                onToggle={() => toggleMenu(item.id)}
                onItemClick={closeMobileDrawer}
              />
            ) : (
              <NavigationItem
                key={item.id}
                item={item}
                collapsed={collapsed}
                onClick={closeMobileDrawer}
              />
            ),
          )}
        </List>
      </Box>
    </>
  );

  if (mobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={closeMobileDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
        width: collapsed ? 72 : DRAWER_WIDTH,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: collapsed ? 72 : DRAWER_WIDTH,
          boxSizing: "border-box",
          transition: "width .25s ease",
        },
      }}
      open
    >
      {sidebarContent}
    </Drawer>
  );
};

export default DashboardSidebar;