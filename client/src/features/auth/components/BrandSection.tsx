import {
    Box,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const BrandSection = () => {
    return (
        <Box
            sx={{
                flex: 1,
                display: {
                    xs: "none",
                    md: "flex",
                },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                p: 6,
            }}
        >
            <Avatar
                sx={{
                    width: 90,
                    height: 90,
                    bgcolor: "primary.main",
                    mb: 3,
                }}
            >
                <BusinessIcon sx={{ fontSize: 50 }} />
            </Avatar>

            <Stack spacing={2}
                sx={{
                    textAlign: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700 }}
                >
                    Enterprise
                </Typography>

                <Typography
                    variant="h4"
                    sx={{ fontWeight: 500 }}
                >
                    Employee Management System
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 400,
                        opacity: 0.8,
                        maxWidth: 450,
                    }}
                >
                    Securely manage employees, departments,
                    attendance, payroll and much more
                    through one centralized platform.
                </Typography>
            </Stack>
        </Box >
    );
};

export default BrandSection;