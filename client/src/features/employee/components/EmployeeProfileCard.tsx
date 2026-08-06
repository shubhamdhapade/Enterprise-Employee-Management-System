import {
    Box,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import EmployeeAvatar from "./EmployeeAvatar";
import EmployeeStatusChip from "./EmployeeStatusChip";
import type { Employee } from "../types/employee.types";

interface EmployeeProfileCardProps {
    employee: Employee;
}

const EmployeeProfileCard = ({
    employee,
}: EmployeeProfileCardProps) => {
    return (
        <Card
            elevation={2}
            sx={{
                borderRadius: 2,
            }}
        >
            <CardContent>
                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    spacing={3}
                    sx={{
                        alignItems: {
                            xs: "center",
                            sm: "flex-start",
                        }
                    }}
                >
                    <EmployeeAvatar employee={employee} size={96} />

                    <Stack
                        spacing={1}
                        sx={{
                            flex: 1,
                            width: "100%"
                        }}
                    >
                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            sx={{
                                justifyContent: "space-between",
                                alignItems: {
                                    xs: "flex-start",
                                    sm: "center",
                                }
                            }}
                            spacing={2}
                        >
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    {employee.firstName} {employee.lastName}
                                </Typography>

                                <Typography color="text.secondary">
                                    {employee.employeeId}
                                </Typography>
                            </Box>

                            <EmployeeStatusChip status={employee.status} />
                        </Stack>

                        <Divider />

                        <Stack spacing={1}>
                            <Typography variant="body1">
                                <strong>Designation:</strong>{" "}
                                {employee.designation}
                            </Typography>

                            <Typography variant="body1">
                                <strong>Department:</strong>{" "}
                                {employee.department}
                            </Typography>

                            <Typography variant="body1">
                                <strong>Email:</strong>{" "}
                                {employee.email}
                            </Typography>

                            <Typography variant="body1">
                                <strong>Phone:</strong>{" "}
                                {employee.phone}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default EmployeeProfileCard;