import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import type { Employee } from "../types/employee.types";
import EmployeeCard from "./EmployeeCard";

interface EmployeeTableProps {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const EmployeeTable = ({
  employees,
  loading,
  error,
}: EmployeeTableProps) => {
  if (loading) {
    return (
      <Box
        sx={{ 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: 300,
            display: "flex"
         }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (employees.length === 0) {
    return (
      <Box 
        sx={{
            textAlign: "center", 
            py: 8
        }}>
        <Typography variant="h6" color="text.secondary">
          No employees found.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Employee records will appear here once available.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {employees.map((employee) => (
        <Grid
          key={employee.id}
          size={{
            xs: 12,
            sm: 6,
            lg: 4,
            xl: 3,
          }}
        >
          <EmployeeCard employee={employee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeTable;