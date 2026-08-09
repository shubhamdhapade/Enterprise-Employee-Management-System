import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import EmployeeForm from "../components/EmployeeForm";
import { employeeService } from "../services/employeeService";
import { useEmployee } from "../hooks/useEmployee";
import type { Employee } from "../types/employee.types";

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    employee,
    loading,
    error,
    loadEmployee,
  } = useEmployee();

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (id) {
      loadEmployee(id);
    }
  }, [id, loadEmployee]);

  const handleSubmit = async (updatedEmployee: Employee) => {
    if (!id) {
      setSaveError("Employee ID is missing.");
      return;
    }

    try {
      setSaving(true);
      setSaveError(null);

      const result = await employeeService.updateEmployee(
        id,
        updatedEmployee,
      );

      if (!result) {
        setSaveError(
          "Employee could not be updated.",
        );
        return;
      }

      navigate(`/employees/${id}`);
    } catch {
      setSaveError(
        "Failed to update employee. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (id) {
      navigate(`/employees/${id}`);
      return;
    }

    navigate("/employees");
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  if (error || !employee) {
    return (
      <DashboardLayout>
        <Alert severity="error">
          {error ?? "Employee not found."}
        </Alert>
      </DashboardLayout>
    );
  }

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
            Edit Employee
          </Typography>

          <Typography color="text.secondary">
            Update employee information.
          </Typography>
        </Box>

        {saveError && (
          <Alert severity="error">
            {saveError}
          </Alert>
        )}

        {saving ? (
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
            initialEmployee={employee}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}
      </Stack>
    </DashboardLayout>
  );
};

export default EditEmployeePage;