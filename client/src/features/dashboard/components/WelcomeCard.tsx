/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-35
 * File    : WelcomeCard.tsx
 * Description:
 * Welcome banner displayed at the top of the dashboard.
 * -----------------------------------------------------------------------------
 */

import {
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

const WelcomeCard = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <Card
            elevation={2}
            sx={{
                borderRadius: 3,
                mb: 3,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: {
                            xs: "flex-start",
                            md: "center",
                        },
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            Welcome back, Shubham 👋
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            Here's an overview of your organization today.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            textAlign: "right",
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Today
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                            }}
                        >
                            {currentDate}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default WelcomeCard;