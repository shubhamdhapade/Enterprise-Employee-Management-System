/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : StatsGrid.tsx
 * Description:
 * Responsive grid displaying dashboard statistics.
 * -----------------------------------------------------------------------------
 */

import Grid from "@mui/material/Grid";

import StatCard from "./StatCard";

import { dashboardStats } from "../constants/dashboardStats";

const StatsGrid = () => {
  return (
    <Grid
      container
      spacing={3}
    >
      {dashboardStats.map((stat) => (
        <Grid
          key={stat.id}
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
        >
          <StatCard stat={stat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsGrid;