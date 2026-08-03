/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-33
 * File    : DashboardPage.tsx
 * Description:
 * Dashboard landing page displayed after successful authentication.
 * -----------------------------------------------------------------------------
 */

import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Employees
              </Typography>

              <Typography variant="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Departments
              </Typography>

              <Typography variant="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Attendance
              </Typography>

              <Typography variant="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card elevation={2}>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Payroll
              </Typography>

              <Typography variant="h4">
                0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;