/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : DashboardContent.tsx
 * Description:
 * Reusable content wrapper for all dashboard pages.
 * -----------------------------------------------------------------------------
 */

import type { ReactNode } from "react";

import { Box, Container } from "@mui/material";

interface DashboardContentProps {
  children: ReactNode;
}

const DashboardContent = ({
  children,
}: DashboardContentProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        flexGrow: 1,
        py: 4,
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default DashboardContent;