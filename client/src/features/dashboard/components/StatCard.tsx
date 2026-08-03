/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : StatCard.tsx
 * Description:
 * Reusable dashboard statistics card.
 * -----------------------------------------------------------------------------
 */

import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import type { DashboardStat } from "../types/dashboard.types";

interface StatCardProps {
  stat: DashboardStat;
}

const StatCard = ({
  stat,
}: StatCardProps) => {
  const Icon = stat.icon;

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {stat.title}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {stat.value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${stat.color}20`,
              color: stat.color,
            }}
          >
            <Icon fontSize="large" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;