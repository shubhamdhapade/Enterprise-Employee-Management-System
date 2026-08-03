/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-34
 * File    : DashboardHeader.tsx
 * Description:
 * Responsive dashboard header with sidebar controls.
 * -----------------------------------------------------------------------------
 */

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import { navigationItems } from "../constants/navigation";
import useNavigation from "../hooks/useNavigation";

const DashboardHeader = () => {
  const {
    toggleSidebar,
    toggleMobileDrawer,
  } = useNavigation();

  const location = useLocation();

  const currentPage =
    navigationItems.find(
      (item) => item.path === location.pathname,
    )?.label ?? "Dashboard";

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* Desktop Collapse */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleSidebar}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleMobileDrawer}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Left */}
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                md: "block",
                fontWeight: 700,
              },
            }}
          >
            Enterprise Employee Management System
          </Typography>

          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "block",
                md: "none",
                fontWeight: 700,
              },
            }}
          >
            EEMS
          </Typography>

          {/* Right */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            {currentPage}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;