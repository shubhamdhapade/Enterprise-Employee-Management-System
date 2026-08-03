/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : DashboardSidebar.tsx
 * Description:
 * Responsive sidebar navigation.
 * -----------------------------------------------------------------------------
 */

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import {
  navigationItems,
  logoutItem,
} from "../constants/navigation";

const DRAWER_WIDTH = 260;

interface DashboardSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({
  mobileOpen,
  onClose,
}: DashboardSidebarProps) => {
  const drawerContent = (
    <>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
          }}
        >
          EEMS
        </Typography>
      </Toolbar>

      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Main Navigation */}
        <List sx={{ flexGrow: 1 }}>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <ListItem
                key={item.path}
                disablePadding
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={onClose}
                  sx={{
                    "&.active": {
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",

                      "& .MuiListItemIcon-root": {
                        color: "primary.contrastText",
                      },
                    },
                  }}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider />

        {/* Logout */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to={logoutItem.path}
            >
              <ListItemIcon>
                <logoutItem.icon />
              </ListItemIcon>

              <ListItemText
                primary={logoutItem.label}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: {
          lg: DRAWER_WIDTH,
        },
        flexShrink: {
          lg: 0,
        },
      }}
    >
      {/* Desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DashboardSidebar;