import { useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

import EmployeeProfileCard from "../components/EmployeeProfileCard";
import { useEmployee } from "../hooks/useEmployee";

const EmployeeDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    employee,
    loading,
    error,
    loadEmployee,
  } = useEmployee();

  useEffect(() => {
    if (id) {
      loadEmployee(id);
    }
  }, [id, loadEmployee]);

  const handleEdit = () => {
    if (!id) {
      return;
    }

    navigate(`/employees/${id}/edit`);
  };

  const handleBack = () => {
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
        <Stack spacing={2}>
          <Alert severity="error">
            {error ?? "Employee not found."}
          </Alert>

          <Box>
            <Button
              variant="outlined"
              onClick={handleBack}
            >
              Back to Employees
            </Button>
          </Box>
        </Stack>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Stack spacing={3}>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Employee Details
            </Typography>

            <Typography color="text.secondary">
              View employee information.
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              variant="contained"
              onClick={handleEdit}
            >
              Edit Employee
            </Button>
          </Stack>
        </Stack>

        <EmployeeProfileCard
          employee={employee}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default EmployeeDetailsPage;