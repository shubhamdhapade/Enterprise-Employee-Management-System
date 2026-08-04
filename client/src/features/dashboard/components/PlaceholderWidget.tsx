/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : PlaceholderWidget.tsx
 * Description:
 * Placeholder card for future dashboard widgets such as charts,
 * analytics and reports.
 * -----------------------------------------------------------------------------
 */

import InsightsIcon from "@mui/icons-material/Insights";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const PlaceholderWidget = () => {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: 600,
          }}
        >
          Analytics
        </Typography>

        <Box
          sx={{
            flex: 1,
            borderRadius: 2,
            border: "2px dashed",
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 280,
            bgcolor: "grey.50",
          }}
        >
          <InsightsIcon
            sx={{
              fontSize: 72,
              color: "text.secondary",
              mb: 2,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            Charts Coming Soon
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              mt: 1,
              maxWidth: 260,
            }}
          >
            Dashboard analytics, reports and visualizations
            will be available in upcoming releases.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlaceholderWidget;