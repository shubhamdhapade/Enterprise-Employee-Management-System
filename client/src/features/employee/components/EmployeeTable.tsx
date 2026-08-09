import {
  Avatar,
  Box,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { Employee } from "../types/employee.types";
import { getEmployeeInitials } from "../utils/employeeHelpers";

interface EmployeeTableProps {
  employees: Employee[];
  onView?: (employee: Employee) => void;
  onEdit?: (employee: Employee) => void;
  onDelete?: (employee: Employee) => void;
}

const getStatusColor = (
  status: Employee["status"]
): "success" | "default" | "warning" => {
  switch (status) {
    case "Active":
      return "success";

    case "On Leave":
      return "warning";

    case "Inactive":
    default:
      return "default";
  }
};

const EmployeeTable = ({
  employees,
  onView,
  onEdit,
  onDelete,
}: EmployeeTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Employment Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7}>
                <Box
                  sx={{
                    py: 5,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    No employees found.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow
                key={employee.id}
                hover
              >
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ alignItems: "center" }}
                  >
                    <Avatar
                      src={employee.avatar || undefined}
                      alt={`${employee.firstName} ${employee.lastName}`}
                    >
                      {getEmployeeInitials(employee)}
                    </Avatar>

                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {employee.firstName} {employee.lastName}
                      </Typography>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {employee.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell>
                  {employee.employeeId}
                </TableCell>

                <TableCell>
                  {employee.department}
                </TableCell>

                <TableCell>
                  {employee.designation}
                </TableCell>

                <TableCell>
                  {employee.employmentType}
                </TableCell>

                <TableCell>
                  <Chip
                    label={employee.status}
                    color={getStatusColor(employee.status)}
                    size="small"
                  />
                </TableCell>

                <TableCell align="right">
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    {onView && (
                      <Typography
                        component="button"
                        variant="body2"
                        onClick={() => onView(employee)}
                        sx={{
                          border: 0,
                          background: "none",
                          cursor: "pointer",
                          color: "primary.main",
                          font: "inherit",
                          p: 0,
                        }}
                      >
                        View
                      </Typography>
                    )}

                    {onEdit && (
                      <Typography
                        component="button"
                        variant="body2"
                        onClick={() => onEdit(employee)}
                        sx={{
                          border: 0,
                          background: "none",
                          cursor: "pointer",
                          color: "primary.main",
                          font: "inherit",
                          p: 0,
                        }}
                      >
                        Edit
                      </Typography>
                    )}

                    {onDelete && (
                      <Typography
                        component="button"
                        variant="body2"
                        onClick={() => onDelete(employee)}
                        sx={{
                          border: 0,
                          background: "none",
                          cursor: "pointer",
                          color: "error.main",
                          font: "inherit",
                          p: 0,
                        }}
                      >
                        Delete
                      </Typography>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;