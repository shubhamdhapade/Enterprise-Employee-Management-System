import {
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import type { Employee } from "../types/employee.types";

interface EmployeeAddressCardProps {
  employee: Employee;
}

const EmployeeAddressCard = ({
  employee,
}: EmployeeAddressCardProps) => {
  const {
    addressLine1,
    city,
    state,
    country,
    postalCode,
  } = employee.address;

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 2,
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
          Address
        </Typography>

        <Stack spacing={1}>
          <Typography>{addressLine1}</Typography>

          <Typography>
            {city}, {state}
          </Typography>

          <Typography>{country}</Typography>

          <Typography>{postalCode}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeAddressCard;