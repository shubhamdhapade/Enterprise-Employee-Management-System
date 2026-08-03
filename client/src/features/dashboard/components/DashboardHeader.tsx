/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : DashboardHeader.tsx
 * Description:
 * Reusable application header for authenticated pages.
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

const DRAWER_WIDTH = 260;

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({
  onMenuClick,
}: DashboardHeaderProps) => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        width: {
          lg: `calc(100% - ${DRAWER_WIDTH}px)`,
        },
        ml: {
          lg: `${DRAWER_WIDTH}px`,
        },
      }}
    >
      <Toolbar>
        {/* Mobile Menu */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{
            display: {
              lg: "none",
            },
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page Title */}
        <Typography
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            fontWeight: 700,
          }}
        >
          Enterprise Employee Management System
        </Typography>

        <Typography
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
             fontWeight: 700,
          }}
        >
          EEMS
        </Typography>

        {/* Current Module */}
        <Box>
          <Typography variant="body1"
          >
            Dashboard
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;