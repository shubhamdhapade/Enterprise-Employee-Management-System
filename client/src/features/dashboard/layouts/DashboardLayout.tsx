/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-33 / EEMS-34
 * File    : DashboardLayout.tsx
 * Description:
 * Shared dashboard layout with responsive navigation.
 * -----------------------------------------------------------------------------
 */

import {
  Box,
  Toolbar,
} from "@mui/material";
import type { ReactNode } from "react";

import DashboardContent from "../components/DashboardContent";
import DashboardFooter from "../components/DashboardFooter";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardHeader />

      <DashboardSidebar />

      <DashboardSidebar mobile />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar />

        <DashboardContent>
          {children}
        </DashboardContent>

        <DashboardFooter />
      </Box>
    </Box>
  );
};

export default DashboardLayout;