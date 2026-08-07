import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import EmployeeForm from "../components/EmployeeForm";
import { employeeService } from "../services/employeeService";
import type { Employee } from "../types/employee.types";

const AddEmployeePage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (employee: Employee) => {
    try {
      setLoading(true);
      setError(null);

      await employeeService.createEmployee(employee);

      navigate("/employees");
    } catch {
      setError("Failed to create employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/employees");
  };

  return (
    <DashboardLayout>
      <Stack spacing={3}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Add Employee
          </Typography>

          <Typography color="text.secondary">
            Create a new employee record.
          </Typography>
        </Box>

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 8,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <EmployeeForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}
      </Stack>
    </DashboardLayout>
  );
};

export default AddEmployeePage;