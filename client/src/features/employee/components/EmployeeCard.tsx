import {
  Card,
  CardContent,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import type { Employee } from "../types/employee.types";
import EmployeeAvatar from "./EmployeeAvatar";
import EmployeeStatusChip from "./EmployeeStatusChip";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={2}
            sx={{alignItems: "center"}}
          >
            <EmployeeAvatar employee={employee} />

            <Stack spacing={0.5}>
              <Typography variant="h6">
                {employee.firstName} {employee.lastName}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {employee.designation}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {employee.department}
              </Typography>
            </Stack>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            sx={{
                justifyContent: "space-between",
                alignItems: "center"
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {employee.employeeId}
            </Typography>

            <EmployeeStatusChip
              status={employee.status}
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;