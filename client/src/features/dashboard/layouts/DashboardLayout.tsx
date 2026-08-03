/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : DashboardLayout.tsx
 * Description:
 * Reusable layout for all authenticated dashboard pages.
 * -----------------------------------------------------------------------------
 */

import { useState } from "react";

import {
  Box,
  Toolbar,
} from "@mui/material";

import DashboardContent from "../components/DashboardContent";
import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const DRAWER_WIDTH = 260;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((previous) => !previous);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <DashboardSidebar
        mobileOpen={mobileOpen}
        onClose={handleDrawerClose}
      />

      {/* Main Layout */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: `calc(100% - ${DRAWER_WIDTH}px)`,
          },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <DashboardHeader
          onMenuClick={handleDrawerToggle}
        />

        {/* Offset AppBar */}
        <Toolbar />

        {/* Page Content */}
        <DashboardContent>
          {children}
        </DashboardContent>

        {/* Footer */}
        <DashboardFooter />
      </Box>
    </Box>
  );
};

export default DashboardLayout;