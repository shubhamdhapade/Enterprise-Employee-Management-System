/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : DashboardOverview.tsx
 * Description:
 * Main dashboard overview containing welcome section,
 * statistics, recent activity and analytics placeholder.
 * -----------------------------------------------------------------------------
 */

import Grid from "@mui/material/Grid";

import PlaceholderWidget from "./PlaceholderWidget";
import RecentActivity from "./RecentActivity";
import StatsGrid from "./StatsGrid";
import WelcomeCard from "./WelcomeCard";

const DashboardOverview = () => {
  return (
    <>
      <WelcomeCard />

      <StatsGrid />

      <Grid
        container
        spacing={3}
        sx={{
          mt: 1,
        }}
      >
        <Grid
          size={{
            xs: 12,
            lg: 7,
          }}
        >
          <RecentActivity />
        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 5,
          }}
        >
          <PlaceholderWidget />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardOverview;