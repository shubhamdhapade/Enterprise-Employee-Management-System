/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : RecentActivity.tsx
 * Description:
 * Displays recent activities on the dashboard.
 * -----------------------------------------------------------------------------
 */

import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import { recentActivities } from "../constants/recentActivities";

const RecentActivity = () => {
  const getActivityIcon = (
    type: string,
  ) => {
    switch (type) {
      case "success":
        return (
          <CheckCircleIcon color="success" />
        );

      case "warning":
        return (
          <WarningAmberIcon color="warning" />
        );

      case "error":
        return (
          <ErrorIcon color="error" />
        );

      default:
        return <InfoIcon color="info" />;
    }
  };

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
          }}
        >
          Recent Activity
        </Typography>

        <List disablePadding>
          {recentActivities.map(
            (activity, index) => (
              <div key={activity.id}>
                <ListItem
                  disableGutters
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                      }}
                    >
                      {getActivityIcon(
                        activity.type,
                      )}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={activity.title}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {
                            activity.description
                          }
                        </Typography>

                        <br />

                        <Typography
                          component="span"
                          variant="caption"
                          color="text.secondary"
                        >
                          {
                            activity.timestamp
                          }
                        </Typography>
                      </>
                    }
                  />
                </ListItem>

                {index !==
                  recentActivities.length -
                    1 && <Divider />}
              </div>
            ),
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;