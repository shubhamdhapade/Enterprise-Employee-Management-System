/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * File    : DashboardFooter.tsx
 * Description:
 * Reusable application footer.
 * -----------------------------------------------------------------------------
 */

import { Box, Divider, Typography } from "@mui/material";

const DashboardFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
      }}
    >
      <Divider />

      <Box
        sx={{
          px: {
            xs: 2,
            md: 4,
          },
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          © {new Date().getFullYear()} Enterprise Employee Management System
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Version 1.0.0
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardFooter;